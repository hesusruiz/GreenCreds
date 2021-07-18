"use strict";

import {
    db,
    mylog,
    myerror,
    settingsPut,
    settingsGet,
    settingsDelete,
    settingsDeleteAll,
    credentialsSave,
    credentialsDeleteCred,
    credentialsDelete,
    credentialsDeleteAll,
    credentialsGet,
    credentialsGetAllRecent,
    credentialsGetAllKeys,
    recentLogs,
    clearLogs,
    resetDatabase,
} from "./db.js";

import { decodeJWT } from "./credential.js";
import { initiateReceiveQRScanning, requestQRAndDisplay } from "./scanqr.js";
import { CWT, HCERT, trustedList, vs, } from "./cwt.js"

window.displayCredentialFromKey = displayCredentialFromKey;
window.transferViaQR = transferViaQR;

const PRODUCTION = false;

// Universal Resolver, Verifier and Fake Issuer URLs
//const MY_SERVER = window.location.origin
const MY_SERVER = "https://safeislandtest.hesusruiz.org";
const MYSELF = "https://www.lanzarotesafe.org";

const UNIVERSAL_RESOLVER = MY_SERVER + "/api/did/v1/identifiers/";
const VERIFY_CREDENTIAL =
    MY_SERVER + "/api/verifiable-credential/v1/verifiable-credential-validations";
const FAKE_ISSUER_GET_CREDENTIALS =
    MY_SERVER + "/api/verifiable-credential/v1/credentials";
const FAKE_ISSUER_GET_PUBLIC_CREDENTIALS =
    MY_SERVER + "/api/verifiable-credential/v1/public/credentials";
const ISSUER_GET_CREDENTIAL = "https://api.lanzarotesafe.org/sms/";
const ISSUER_GET_PUBLIC_CREDENTIAL =
    MY_SERVER + "/api/verifiable-credential/v1/public/";

// This function is called on first load and when a refresh is triggered in any page
// When called the DOM is fully loaded and safe to manipulate
$(async function () {
    // Handle one-time initialization when the user executes for the first time the app
    await performOneTimeInitialization();

    // Install service worker for off-line support
    if ("serviceWorker" in navigator) {
        const wb = new Workbox("/sw.js");

        wb.addEventListener("message", (event) => {
            if (event.data.type === "CACHE_UPDATED") {
                const { updatedURL } = event.data.payload;

                console.log(`A newer version of ${updatedURL} is available!`);
            }
        });

        wb.addEventListener("activated", async (event) => {
            // `event.isUpdate` will be true if another version of the service
            // worker was controlling the page when this version was registered.
            if (event.isUpdate) {
                console.log("Service worker has been updated.");
                await performAppUpgrade()
            } else {
                console.log("Service worker has been installed for the first time.");
                await performAppUpgrade()
            }
        });

        wb.addEventListener("waiting", (event) => {
            console.log(
                `A new service worker has installed, but it can't activate` +
                `until all tabs running the current version have fully unloaded.`
            );
        });

        // Register the service worker after event listeners have been added.
        wb.register();

        //    const swVersion = await wb.messageSW({ type: "GET_VERSION" });
        //    console.log("Service Worker version:", swVersion);

    }

    // Check if a credential id was specified in the URL
    let credId = searchParams.get("id");

    if (credId) {
        // Build the URL of the server to retrieve the credential
        var targetURLRead = ISSUER_GET_CREDENTIAL + credId;

        // Request the credential
        await requestQRAndDisplay(
            targetURLRead,
            "#displayCredentialPage",
            ST_PASSENGER_SCAN
        );

        return;
    }

    // Check if a public credential id was specified in the URL
    credId = searchParams.get("pubid");

    if (credId) {
        // Build the URL of the server to retrieve the credential
        var targetURLRead = ISSUER_GET_PUBLIC_CREDENTIAL + credId;
        console.log("Public Credential", targetURLRead);

        // Request the credential
        await requestQRAndDisplay(
            targetURLRead,
            "#displayCredentialPage",
            ST_PASSENGER_SCAN
        );

        return;
    }

    // Show current page and execute logic on page transition
    console.log(homePage);
    //processPageEntered(homePage, undefined);
    await gotoPage(homePage);
});

// Compile the templates for displaying the credentials
compileCredentialTemplates();

// ***************************************************
// ***************************************************
// Support for app installation for off-line support
//

var deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");

installButton.addEventListener("click", installPWA);
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    console.log("saveBeforeInstallPromptEvent");

    // Save the prompt event for later when the user wants to click the Install button
    deferredInstallPrompt = evt;

    // Show the button only when the browser has generated this event
    // If the app is already installed, the browser does not generate the event
    $("#butInstall").show();
}

function installPWA(evt) {
    console.log("installPWA event");
    deferredInstallPrompt.prompt();

    // Hide install button, can only be invoked once per event
    $("#butInstall").hide();

    // Log the choice that the user made
    deferredInstallPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
            console.log("User accepted the A2HS prompt", choice);
        } else {
            console.log("User dismissed the A2HS prompt", choice);
        }
        deferredInstallPrompt = null;
    });
}

// To log all events of app installation, even if the user does not click our Install button
window.addEventListener("appinstalled", logAppInstalled);
function logAppInstalled(evt) {
    console.log("SafeIsland app was installed.", evt);
}

//
// End of Support for app installation for off-line support
// ********************************************************
// ********************************************************

// This is called when a new version of the Service Worker has been activated.
// This means that a new version of the application has been installed
async function performAppUpgrade() {
    console.log("Performing Upgrade");

    try {
        // Get the new version of the application
        var newVersion = await $.get("/VERSION.txt");
        if (newVersion) {
            await settingsPut("VERSION", newVersion);
        }
    } catch (error) {
        console.log("ERROR updating version", error)
    }

    // Get the value sets
    await vs.init()

    // Refresh the screen so the user sees the new pages
    window.location.reload();

}

// Initialize the app when the user downloads the application for the first time,
// or when a factory reset is performed by the user
// The function is safe to be called many times
async function performOneTimeInitialization() {
    console.log("Performing OneTime Initialization");

    // Get the current list of public keys
    await trustedList.init()

    // Set the valueSet variable
    await vs.init()

    // Check if this is the first time that the user downloads the app
    // There is a persistent flag in the local storage
    var alreadyInitialized = await settingsGet("initialized");

    if (alreadyInitialized != true) {
        try {
            // Save the host from where the app was loaded
            await settingsPut("apiHost", MY_SERVER);
        } catch (error) {
            // Log the error
            myerror("Onetime initialization error");
        }

        // Signal that we already performed initialization
        await settingsPut("initialized", true);
    }
}

// Call the server to verify a W3C VC in JWT serialized format
async function verifyJwtVc(jwt) {
    // Build the body of the request
    let body = JSON.stringify({ payload: jwt });

    // Perform validation as a POST request
    // Do not handle errors here and leave it to the caller to catch the exception
    let claims = await $.post(VERIFY_CREDENTIAL, body);
    return claims;
}

// Perform DID Resolution, which is also a DID verification
function verifyDID(inputDID) {
    console.log(inputDID);

    // Build the URL of the server to resolve the DID
    var targetURL = UNIVERSAL_RESOLVER + inputDID;

    // Use the URL to get the DID Document from server
    $.get(
        targetURL,
        function (data) {
            // The actual data is inside a "payload" entry in the response
            console.log(data.payload);
            didDoc = data.payload;

            // Get the Issuer DID from inside the received data
            receivedDID = didDoc.id;

            // Log the Issuer DID inside the received data
            console.log(receivedDID);

            // The DID that we resolved should be the same as the one inside the DID Document
            if (inputDID == receivedDID) {
                console.log("VERIFICATION SUCCESSFUL");
            } else {
                myerror("ERROR: DIDs DO NOT MATCH");
            }
        },
        "json"
    );
}

// This is triggered by the onclick event of each credential summary in the Issuer page
// We save the credential ID to display and switch to the genericDisplayQR page
// This page change will trigger the genericDisplayQR() function
// A page refresh by the user while in the genericDisplayQR page will trigger the same routine,
// using the saved variable (issuerCredentialID)
export async function transferViaQR(jwt) {
    console.log("In transferViaQR");

    // Extract the credential and set the current data for the display page
    try {
        let cred = decodeJWT(jwt);
        let currentCredential = {
            type: "w3cvc",
            encoded: jwt,
            decoded: cred,
        };
        await settingsPut("currentCredential", currentCredential);
    } catch (error) {
        myerror("Error decoding credential", error);
        return;
    }

    // Transfer control to the page for display
    await gotoPage("#displayCredentialPage", { screenType: "fromIssuer" });
}

// Utility function to generate a cryptographically unique number
async function generateUID() {
    // Get the Crypto object (with support for IE11)
    //    var cryptoObj = window.crypto || window.msCrypto;
    const array = new Uint32Array(2);
    crypto.getRandomValues(array);
    var UID = array[0].toString() + array[1].toString();
    console.log(`New UID: ${UID}`);
    return UID;
}

// Generate key fingerprint to use in DIDs and Key identifiers
// The format used here is for Peer DIDs (see spec for details)
async function keyPairFingerprint(keyPair) {
    // Get the Public key
    let PK = keyPair.publicKey;

    // Export the Public Key in a byte array
    let PKexported = await crypto.subtle.exportKey("raw", PK);
    let byteView = new Uint8Array(PKexported);

    // Create a bigger array to concatenate with the multicodec value
    let wholeArray = new Uint8Array(byteView.length + 2);

    // The multicodec for P-256 is 0x1200
    const multicodecP256 = 0x1200;
    wholeArray[0] = 0x12;
    wholeArray[1] = 0x00;

    // Concatenate the public key raw values
    wholeArray.set(byteView, 2);

    // Encode in Base58 the result of concatenation
    let b58encoded = to_b58(wholeArray);

    let fingerprint = `0z${b58encoded}`;

    return fingerprint;
}

// Generate the Peer DID for the user
async function getOrGeneratePeerDID() {
    // Check if we already have the peerDID in the database
    var didData = await settingsGet("didData");
    if (didData == null) {
        didData = await generateDidPeer();
        console.log(didData.did, didData.keyPair);
        await settingsPut("didData", didData);
    }

    return didData;
}

// Generate a DID in format of Peer DID (see spec for details)
// The key used is Elliptic but restricted to the one supported by browsers
// in the standard crypto Subtle subsystem
async function generateDidPeer() {
    // Ask browser to create a key pair with the p256 curve
    var keyPair = await crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-256",
        },
        true,
        ["sign", "verify"]
    );

    // Export both keys to the JWK format (see spec for details)
    var privateKeyJWK = await crypto.subtle.exportKey("jwk", keyPair.privateKey);
    var publicKeyJWK = await crypto.subtle.exportKey("jwk", keyPair.publicKey);

    // Get the key fingerprint in Peer DID format
    let fingerprint = await keyPairFingerprint(keyPair);

    // Buid the DID string
    var did = `did:peer:${fingerprint}`;

    // Return an object with the DID and both keys
    return { did: did, privateKey: privateKeyJWK, publicKey: publicKeyJWK };
}

async function didDocFromDid(did) { }

var MSB = 0x80,
    REST = 0x7f,
    MSBALL = ~REST,
    INT = Math.pow(2, 31);

function encode(num, out, offset) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
        encode.bytes = 0;
        throw new RangeError("Could not encode varint");
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;

    while (num >= INT) {
        out[offset++] = (num & 0xff) | MSB;
        num /= 128;
    }
    while (num & MSBALL) {
        out[offset++] = (num & 0xff) | MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;

    encode.bytes = offset - oldOffset + 1;

    return out;
}

var B58MAP = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

var to_b58 = function (
    B //Uint8Array raw byte input
) {
    var d = [], //the array for storing the stream of base58 digits
        s = "", //the result string variable that will be returned
        i, //the iterator variable for the byte input
        j, //the iterator variable for the base58 digit array (d)
        c, //the carry amount variable that is used to overflow from the current base58 digit to the next base58 digit
        n; //a temporary placeholder variable for the current base58 digit
    for (i in B) {
        //loop through each byte in the input stream
        (j = 0), //reset the base58 digit iterator
            (c = B[i]); //set the initial carry amount equal to the current byte amount
        s += c || s.length ^ i ? "" : 1; //prepend the result string with a "1" (0 in base58) if the byte stream is zero and non-zero bytes haven't been seen yet (to ensure correct decode length)
        while (j in d || c) {
            //start looping through the digits until there are no more digits and no carry amount
            n = d[j]; //set the placeholder for the current base58 digit
            n = n ? n * 256 + c : c; //shift the current base58 one byte and add the carry amount (or just add the carry amount if this is a new digit)
            c = (n / 58) | 0; //find the new carry amount (floored integer of current digit divided by 58)
            d[j] = n % 58; //reset the current base58 digit to the remainder (the carry amount will pass on the overflow)
            j++; //iterate to the next base58 digit
        }
    }
    while (j--)
        //since the base58 digits are backwards, loop through them in reverse order
        s += B58MAP[d[j]]; //lookup the character associated with each base58 digit
    return s; //return the final base58 string
};

var from_b58 = function (
    S //Base58 encoded string input
) {
    var d = [], //the array for storing the stream of decoded bytes
        b = [], //the result byte array that will be returned
        i, //the iterator variable for the base58 string
        j, //the iterator variable for the byte array (d)
        c, //the carry amount variable that is used to overflow from the current byte to the next byte
        n; //a temporary placeholder variable for the current byte
    for (i in S) {
        //loop through each base58 character in the input string
        (j = 0), //reset the byte iterator
            (c = B58MAP.indexOf(S[i])); //set the initial carry amount equal to the current base58 digit
        if (c < 0)
            //see if the base58 digit lookup is invalid (-1)
            return undefined; //if invalid base58 digit, bail out and return undefined
        c || b.length ^ i ? i : b.push(0); //prepend the result array with a zero if the base58 digit is zero and non-zero characters haven't been seen yet (to ensure correct decode length)
        while (j in d || c) {
            //start looping through the bytes until there are no more bytes and no carry amount
            n = d[j]; //set the placeholder for the current byte
            n = n ? n * 58 + c : c; //shift the current byte 58 units and add the carry amount (or just add the carry amount if this is a new byte)
            c = n >> 8; //find the new carry amount (1-byte shift of current byte value)
            d[j] = n % 256; //reset the current byte to the remainder (the carry amount will pass on the overflow)
            j++; //iterate to the next byte
        }
    }
    while (j--)
        //since the byte array is backwards, loop through it in reverse order
        b.push(d[j]); //append each byte to the result
    return new Uint8Array(b); //return the final byte array in Uint8Array format
};

/**
 * Converts an Ed25519KeyPair object to a `did:key` method DID Document.
 *
 * @param {Ed25519KeyPair} edKey
 * @returns {DidDocument}
 */
async function keyToDidDoc(keyPair) {
    const did = `did:peer:${await keyPairFingerprint(keyPair)}`;
    const keyId = `${did}#${await keyPairFingerprint(keyPair)}`;
    const keyController = did;
    const keyType = "Ed25519VerificationKey2018";

    const didDoc = {
        "@context": ["https://w3id.org/did/v0.11"],
        id: did,
        publicKey: [
            {
                id: keyId,
                type: keyType,
                controller: keyController,
                publicKeyBase58: did,
            },
        ],
        authentication: [keyId],
        assertionMethod: [keyId],
        capabilityDelegation: [keyId],
        capabilityInvocation: [keyId],
        keyAgreement: [
            {
                id: keyId,
                type: keyType,
                controller: did,
                publicKeyBase58: did,
            },
        ],
    };

    return didDoc;
}

/**
 * Computes and returns the id of a given key. Used by `did-io` drivers.
 *
 * @param {LDKeyPair} key
 *
 * @returns {string} Returns the key's id.
 */
async function computeKeyId({ key }) {
    return `did:peer:${keyPairFingerprint(key)}#${keyPairFingerprint(key)}`;
}


// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************

pages["#credentialListPage"] = async function (pageData) {
    console.log("=> Inside #credentialListPage");

    // Populate the credential list in the page

    // Get the holder element to populate
    let element = document.querySelector("#credentialListHolder");

    // Get the keys of all credentials in the database
    let keys = await credentialsGetAllKeys();

    // Keep a count of the number of valid credentials
    let validCredentials = 0;

    // Do nothing if there are no credentials
    if (keys.length == 0) {
        element.innerHTML = "<h4>Currently you do not have credentials.</h4>";
        return;
    }

    // Display all credentials, taking care of the different types
    let html = "";
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        // Retrieve the credential and extract its components
        let credential = await credentialsGet(key);

        // Check if valid credential
        if (!credential) {
            myerror("Invalid credential for key", key);
            continue;
        }

        // Check that the credential was correctly stored
        let credentialType = credential["type"];
        let credentialDecoded = credential["decoded"];
        if (!credentialType || !credentialDecoded) {
            myerror("type or decoded fields not found in credential for key", key);
            continue;
        }
        console.log("Credtype", credentialType);

        // We support several credential types and subtypes
        // We will extract data from each type for display in a common format
        let cred = "";
        let schema = "";
        let analysisDate = "";
        let cred_date = "";
        let displayName = "";
        let subjectName = "";
        let cred_error = undefined;

        if (credentialType == "hcert") {
            // The EU COVID CERTIFICATE
            html += await HCERT.renderSummary(key, credential);
            continue;
        } else if (credentialType == "ukimmigration") {
            // Credential used by the UK Visa & Immigration services
            schema = "ukimmigration";
            displayName = "UK Visa & Immigration";
            cred = credentialDecoded;
            cred_date = cred["ts"];
            subjectName = cred["ln"] + " " + cred["fn"];
        } else {
            cred_error = decodeJWT(credential["encoded"]).error;
            console.log(`CredError: ${cred_error}`);
            // The only error we support is expired credential
            if (cred_error && cred_error != "Expired certificate") {
                myerror(cred_error);
                continue;
            }

            let schema = credentialDecoded["body"]["vc"]["credentialSchema"]["id"];

            if (schema == "covidTestResult") {
                displayName = "Covid19 certificate";
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "covidTestResult"
                    ];
                analysisDate = cred["analysis"]["date"];
                // Format timestamp (milliseconds since epoch) for presentation
                cred_date = formatDate(analysisDate * 1000);
                subjectName = cred["patient"]["name"];
            }

            if (schema == "vaccinationCredential") {
                displayName = "Vaccination certificate";
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "vaccinationCredential"
                    ];
                analysisDate = cred["vaccination"]["date"];
                // Format timestamp (milliseconds since epoch) for presentation
                cred_date = formatDate(analysisDate * 1000);
                subjectName = cred["patient"]["name"];
            }

            if (schema == "publicCredential") {
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "publicCredential"
                    ];
                cred_date = formatDate(credentialDecoded["body"]["iat"] * 1000);
                displayName = cred["name"];
                subjectName = cred["entity"]["name"];
            }
        }

        if (cred == "") {
            myerror("Credential was not recognized");
            return;
        }

        if (cred_error) {
            html += `
            <div class="card my-3 shadow failed">
                <a onclick="displayCredentialFromKey('${key}')">
                <div class="card-body">
                    <h5 class="card-title">${subjectName}</h5>
                    <p>${displayName}</p>
                    <p>${cred_date}</p>
                    <p>${cred_error}</p>
                </div>
                </a>
            </div>
            `;
        } else {
            html += `
            <div class="card my-3 shadow">
                <a onclick="displayCredentialFromKey('${key}')">
                <div class="card-body">
                    <h5 class="card-title">${subjectName}</h5>
                    <p>${displayName}</p>
                    <p>${cred_date}</p>
                </div>
                </a>
            </div>
            `;
        }
    }

    element.innerHTML = html;
};

async function dbAllCredentials() {
    let keys = await dbCredentials.keys();

    // Check if there are keys
    if (keys == null || keys.length == 0) {
        return null;
    }

    // Sort the array in reverse order: newest first
    keys.sort().reverse();

    return keys;
}

// Gets one credential from the local DB, sets it as default and switches to the display page
export async function displayCredentialFromKey(key) {
    console.log("displayCredentialFromKey", key);

    // Put the credential in the "currentCredential" temporary storage
    let credential = await credentialsGet(key);
    await settingsPut("currentCredential", credential);
    // Go to the diaplay credential page
    await gotoPage("#displayCredentialPage", { screenType: ST_NORMAL });
}

function formatDate(timestamp) {
    // timestamp: milliseconds since epoch
    let ts = new Date(timestamp);

    let year = ts.getFullYear();
    let month = ts.getMonth() + 1;
    month = month.toString().padStart(2, "0");
    let day = ts.getDate().toString().padStart(2, "0");
    let hours = ts.getHours().toString().padStart(2, "0");
    let minutes = ts.getMinutes().toString().padStart(2, "0");
    let seconds = ts.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}


// ******************************************************
pages["#displayCredentialPage"] = async function (pageData) {
    console.log("=> Inside #displayCredentialPage", pageData);

    // Get the credential that the caller put in temporary storage
    let credential = await settingsGet("currentCredential");
    if (!credential) {
        showError("No credential in temporary storage");
        return;
    }
    console.log("Presenting credential", credential);

    let thisPage = document.querySelector("#displayCredentialPage")

    // Determine the screen type to use, depending on caller
    let screenType = ST_NORMAL;
    if (pageData && pageData.screenType) {
        screenType = pageData.screenType;
    }

    // Hide all buttons, later enable the ones for the type of page
    thisPage.querySelector("#backButton").style.display = "none";
    thisPage.querySelector("#displayQRButton").style.display = "none";
    thisPage.querySelector("#shareButton").style.display = "none";
    thisPage.querySelector("#deleteButton").style.display = "none";

    // Hide all alert messages, later enable the correct one
    thisPage.querySelector("#alertCredentialReceived").style.display = "none";
    thisPage.querySelector("#alertCredentialSuccess").style.display = "none";
    thisPage.querySelector("#alertCredentialFailed").style.display = "none";

    // Hide credential background status color
    thisPage.querySelector("#placeHolder").classList.remove("failed");
    thisPage.querySelector("#placeHolder").classList.remove("verified");


    if (screenType == ST_NORMAL) {
        // Screen used to display user credentials from the local store

        // Enable the buttons for QR, Share and Delete
        thisPage.querySelector("#displayQRButton").style.display = "";
        //                    thisPage.querySelector('#shareButton').style.display = "";
        thisPage.querySelector("#deleteButton").style.display = "";
    }

    if (screenType == ST_PASSENGER_SCAN) {
        // We are invoked after the passenger has scanned a QR

        // Enable the alert to allow saving the credential into the store
        thisPage.querySelector("#alertCredentialReceived").style.display = "";
    }

    if (screenType == ST_VERIFIER_SCAN) {
        // We are invoked after the verifier has scanned a QR

        // Enable the Back button
        thisPage.querySelector("#backButton").style.display = "";
    }

    if (screenType == "fromIssuer") {
        // We are invoked from the fake Issuer page

        // Enable the button for QR
        thisPage.querySelector("#displayQRButton").style.display = "";
        //                    thisPage.querySelector('#shareButton').style.display = "";
    }

    // Get the type of credential we have to display

    console.log("Cred type", credential["type"]);

    if (credential["type"] == "hcert") {
        let hcert

        // Verify the credential if we were called from the Verifier
        if (screenType == ST_VERIFIER_SCAN) {
            // We are invoked after the verifier has scanned a QR

            // Decode credential verifying it at the same time
            hcert = await CWT.decodeHC1QR(
                credential["encoded"],
                true
            );
            let verified = hcert[3]

            // Display message depending on the result of verification
            if (!verified) {
                thisPage.querySelector("#alertCredentialFailed").style.display = "";
                thisPage.querySelector("#failedmsg").innerHTML = "Invalid signature";
            } else {
                // Sound the beep to indicate success
                thisPage.querySelector("#alertCredentialSuccess audio").play();
                thisPage.querySelector("#alertCredentialSuccess").style.display = "";
                thisPage.querySelector("#placeHolder").classList.add("verified");
            }
        } else {

            // Decode credential without verification
            hcert = await CWT.decodeHC1QR(
                credential["encoded"],
                false
            );

        }

        // Render the credential
        let html = HCERT.renderDetail(hcert);

        // Set the generated HTML into the page element
        thisPage.querySelector("#placeHolder").innerHTML = html;

        return;
    }

    if (credential["type"] == "ukimmigration") {
        // get the corresponding compiled Handlebars template
        var template = getTemplate("ukimmigration");

        // Generate the HTML using the credential
        var html = template(credential["decoded"]);

        // Set the generated HTML into the page element
        thisPage.querySelector("#placeHolder").innerHTML = html;

        return;
    }

    if (credential["type"] == "w3cvc") {
        let jwt = credential["encoded"];

        // Perform some local checks before sending to server
        let failedmsg = decodeJWT(jwt).error;
        if (failedmsg && failedmsg != "Expired certificate") {
            showError(failedmsg);
            window.history.back();
            return;
        }

        if (screenType == ST_VERIFIER_SCAN) {
            // Verify with the server if local verifications were successful
            if (!failedmsg) {
                // Verify the jwt including the signature (queries Issuer signature in the blockchain)
                try {
                    let claims = await verifyJwtVc(jwt);
                    console.log("Credential verified by server", claims);
                } catch (error) {
                    failedmsg = error.responseText;
                    myerror("Credential verification failed", failedmsg);
                }
            }

            // Display message depending on the result of verification
            if (failedmsg) {
                thisPage.querySelector("#alertCredentialFailed").style.display = "";
                thisPage.querySelector("#failedmsg").innerHTML = failedmsg;
            } else {
                // Sound the beep to indicate success
                thisPage.querySelector("#alertCredentialSuccess audio").play();
                thisPage.querySelector("#alertCredentialSuccess").style.display = "";
                thisPage.querySelector("#placeHolder").classList.add("verified");
            }
        }

        // Display background
        if (failedmsg) {
            thisPage.querySelector("#placeHolder").classList.add("failed");
        }

        var schema = credential["decoded"]["body"]["vc"]["credentialSchema"]["id"];

        console.log(schema);

        // get the corresponding compiled Handlebars template
        var template = getTemplate(schema);

        // Generate the HTML using the "body" field of the credential
        var html = template(credential["decoded"]["body"]);

        // Set the generated HTML into the page element
        thisPage.querySelector("#placeHolder").innerHTML = html;
    }
};

document.querySelector("#displayQRButton").onclick =
    async function displayQRButton() {
        let pageData = window.history.state.pageData;
        await gotoPage("#displayQRPage", { pageData });
    };

document.querySelector("#saveCredentialButton").onclick =
    async function saveCredentialButton() {
        let currentCredential = await settingsGet("currentCredential");
        let cred = await credentialsSave(currentCredential);

        // Reload app if credential was saved.
        // In case of error, do nothing (a modal screen is displayed)
        if (cred) {
            // Reload application
            console.log("Reloading the page to", homePage);
            //                    window.location.href = MYSELF
            window.location.reload();
        } else {
            await gotoPage(homePage);
        }
    };

document.querySelector("#deleteButton").onclick =
    async function deleteButton() {
        $("#passengerDeleteCredModal").modal("show");
        return;
    };

document.querySelector("#deleteCredentialButton").onclick =
    async function deleteCredential() {
        $("#passengerDeleteCredModal").modal("hide");

        var currentCredential = await settingsGet("currentCredential");
        console.log("Deleting credential", currentCredential);
        await credentialsDeleteCred(currentCredential);
        await settingsDelete("currentCredential");

        await gotoPage("#credentialListPage");
    };

async function showError(_text) {
    myerror(_text);
    document.querySelector("#errorDisplayText").innerHTML = `${_text}`;
    $("#errorDisplayModal").modal("show");
    return;
}

async function dismissError() {
    $("#errorDisplayModal").modal("hide");

    await gotoPage(homePage);
}

// ***********************************************************

var qrDisplayType = "";
var QRpieces = [];
var qrelement = "";
var realqrelement = "";
var elwidth = 0;
var frameSeparation = 400;
var thisPage = "";

// This page generates the QR so it can be scanned by the Verifier
// In order to send big amounts of data, it displays several QRs in sequence
pages["#displayQRPage"] = async function (pageData) {
    console.log("=> Inside #displayQRPage");

    headerBrandBack(true);
    var thisPage = document.querySelector("#displayQRPage");

    // Get the DOM element where we will display the QR and erase any previous content
    // We use this to avoid flickering when QRs are of different sizes
    realqrelement = thisPage.querySelector("#realplaceholderQR");
    realqrelement.style.display = "none";
    realqrelement.setAttribute("src", "");

    var credential = await settingsGet("currentCredential");

    var credType = credential["type"];
    if (credType == "hcert" || credType == "ukimmigration") {
        qrDisplayType = "single";
    } else if (
        credential["decoded"]["body"]["vc"]["credentialSchema"]["id"] ==
        "publicCredential"
    ) {
        qrDisplayType = "url";
    } else {
        qrDisplayType = "multi";
    }

    console.log("QrTYPE", qrDisplayType);
    var credentialJWT = credential["encoded"];

    // The DOM element where the library will create the QR. Hidden to avoid flickering
    qrelement = thisPage.querySelector("#offPlaceholderQR");
    console.log("Unreal: ", qrelement);
    qrelement.style.display = "none";


    // We will tell the QR library to generate a QR with the width of the DOM element
    //    elwidth = Math.floor($(realqrelement).width())
    //    elwidth = Math.floor(realqrelement.style.width)
    elwidth = Math.min(screen.availWidth - 60, 350);
    console.log("Element width:", elwidth);

    if (qrDisplayType == "single") {
        QRpieces = [credentialJWT];
    } else if (qrDisplayType == "url") {
        console.log("Display of public credential");
        QRpieces = [
            "https://www.lanzarotesafe.org/?pubid=" +
            credential["decoded"]["body"]["uuid"],
        ];
    } else {
        // Calculate a number of pieces to divide the whole JWT
        // The target size is 300 chars, but we will divide the JWT in similar size pieces,
        // so all the QRs look similar, including the last one
        var totalLength = credentialJWT.length;
        var targetPieceSize = 300;

        var numPieces = Math.floor(totalLength / targetPieceSize);
        var remainder = totalLength % targetPieceSize;
        var extraChars = Math.ceil(remainder / numPieces);

        // Calculate the real size of each piece
        var pieceSize = targetPieceSize + extraChars;
        console.log("Piece length: ", pieceSize);

        // Divide the credential string into pieces
        QRpieces = credentialJWT.match(new RegExp(".{1," + pieceSize + "}", "g"));
        console.log(QRpieces);
    }

    // Display the first piece (index 0)
    await QRDisplayTick(0);

    return;
};

async function QRDisplayTick(index) {
    var currentPage = "";
    if (window.history.state != null) {
        currentPage = window.history.state.pageName;
    }
    // Ckeck if we are running in the context of the page that initiated display
    if (currentPage != "#displayQRPage") {
        // The user navigated out of the displayQRPage page, should stop displaying QR
        // Return without activating the callback again, so it will stop
        console.log("Exiting QR timer");
        return;
    }

    // Erase the display of the QR
    qrelement.innerText = "";

    let numPieces = QRpieces.length;
    // Get the current piece to display
    var body = "multi|w3cvc|";
    if (numPieces > 9) {
        body = body + `${numPieces}|`;
    } else {
        body = body + `0${numPieces}|`;
    }

    if (index > 9) {
        body = body + `${index}|`;
    } else {
        body = body + `0${index}|`;
    }

    console.log("DisplayType", qrDisplayType);
    if (qrDisplayType == "single") {
        body = QRpieces[0];
    } else if (qrDisplayType == "url") {
        body = QRpieces[0];
    } else {
        body = body + `${QRpieces[index]}`;
    }

    // Build the QR and display in the DOM element
    var qrcode = new QRCode(
        qrelement, // Place to display QR image
        {
            drawer: "canvas",
            // height: elwidth,
            // width: elwidth,
            height: 500,
            width: 500,
            text: body, // Contents of the QR
            onRenderingStart: function (options) { },
            onRenderingEnd: function (options, dataURL) {
                var imageQR = document.querySelector("#realplaceholderQR");
                imageQR.setAttribute("src", dataURL);
                imageQR.style.width = elwidth + "px";
                imageQR.style.display = "";

            },
        }
    );

    if (qrDisplayType == "multi") {
        // Set the next timer for displaying the next piece of the QR
        var nextIndex = index + 1;
        if (nextIndex >= QRpieces.length) {
            nextIndex = 0;
        }
        setTimeout(QRDisplayTick, frameSeparation, nextIndex);
    }
}

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************

pages["#passengerQRScanPage"] = async function (pageData) {
    console.log("=> Inside #passengerQRScanPage");

    let qrHolder = document.querySelector("#passengerQRScanPageCanvas");
    let qrMessage = document.querySelector("#passengerQRScanPageMessage");
    initiateReceiveQRScanning(
        qrHolder,
        qrMessage,
        "#displayCredentialPage",
        ST_PASSENGER_SCAN
    );
};

pages["#verifierScanQR"] = async function (pageData) {
    console.log("=> Inside #verifierScanQR");

    let qrHolder = document.querySelector("#verifierScanQR #qrCanvas");
    let qrMessage = document.querySelector("#verifierScanQR #qrMessage");
    initiateReceiveQRScanning(
        qrHolder,
        qrMessage,
        "#displayCredentialPage",
        ST_VERIFIER_SCAN
    );
};

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#demo"] = async function (pageData) {
    console.log("=> Inside demo");
};

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#tuboScanPage"] = async function (pageData) {
    console.log("=> Inside #tuboScanPage");
    await tuboStartup();
};

document.querySelector("#tuboScanButton").onclick = tuboStartup;

var tuboVideoEl = document.getElementById("tuboVideo");
var tuboCanvasEl = document.getElementById("tuboCanvas");
var tuboCanvasCtx = tuboCanvasEl.getContext("2d");
var tuboDisplayEl = document.getElementById("tuboDisplay");
var tuboRefreshRate = 100; // In milliseconds
var codeReader = undefined;

async function tuboStartup() {
    document.getElementById("result").value = "";

    var constraints = {
        video: {
            facingMode: "environment",
            width: 1024,
        },
    };

    try {
        globalStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (err) {
        // Handle the error
        document.getElementById("alertNoTubeVideo").style.display = "";
        return;
    }

    tuboVideoEl.srcObject = globalStream;
    tuboVideoEl.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    tuboVideoEl.play();

    tuboVideoEl.oncanplay = (event) => {
        console.log("Video can start.");
        tuboDisplayEl.style.display = "";
        document.getElementById("tuboScanButton").style.display = "none";

        // Calculate the video size from the camera
        var videoWidth = tuboVideoEl.videoWidth;
        var videoHeight = tuboVideoEl.videoHeight;
        var aspectRatio = videoWidth / videoHeight;
        var mensaje = "Width: " + videoWidth + " Height: " + videoHeight;
        //alert(mensaje)

        // Calculate the cropping section for source image
        var sx = 0;
        var sy = videoHeight / 3;
        var sWidth = tuboVideoEl.videoWidth;
        var sHeight = videoHeight - 2 * sy;

        console.log("Video Width:", sWidth, " Height: ", sHeight);

        tuboCanvasEl.width = sWidth;
        tuboCanvasEl.height = sHeight;

        // Calculate the destination rectangle to visualize in the Canvas
        var dx = 0;
        var dy = 0;
        var dWidth = tuboCanvasEl.width;
        var dHeight = tuboCanvasEl.height;
        console.log("Canvas Width:", dWidth, " Height: ", dHeight);

        // Create the Barcode reader
        codeReader = new ZXing.BrowserBarcodeReader();

        codeReader
            .decodeOnceFromStream(globalStream)
            .then((result) => {
                console.log(result);
                stopAllMediaTracks();
                tuboDisplayEl.style.display = "none";
                document.getElementById("tuboScanButton").style.display = "";
                document.getElementById("result").value = result.text;
            })
            .catch((err) => {
                console.error(err);
                stopAllMediaTracks();
                tuboDisplayEl.style.display = "none";
                document.getElementById("tuboScanButton").style.display = "";
                document.getElementById("result").value = err;
            });

        tuboVideoDisplay(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    };
}

async function tuboVideoDisplay(
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight
) {
    // Draw in the Canvas from the Video
    tuboCanvasCtx.drawImage(
        tuboVideoEl,
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
    );

    //                    tuboCanvasCtx.strokeStyle = 'blue'
    //                    tuboCanvasCtx.strokeRect(10, 10, dWidth - 20, dHeight - 20)

    setTimeout(
        tuboVideoDisplay,
        tuboRefreshRate,
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
    );
}

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#credentialDetailsPage"] = async function (pageData) {
    console.log("=> Inside #credentialDetailsPage");
    // Set the arrow back on the header
    headerBrandBack(true);
    var thisPage = document.querySelector("#credentialDetailsPage");

    // Hide the error display
    let errorEl = thisPage.querySelector("#credentialDetailsPageError");
    errorEl.style.display = "none";

    // Get the placeholder and erase its contents
    let el = document.querySelector("#credentialDetailsPlaceHolder");
    el.innerHTML = "";

    // Get the credential that the caller put in temporary storage
    let credential = await settingsGet("currentCredential");
    if (!credential) {
        showError("Credential not in temporary storage");
        window.history.back();
        return;
    }
    console.log("Presenting credential", credential);

    // Get the type of credential
    let credType = credential["type"];
    console.log("Cred type", credType);

    if (credType == "w3cvc") {
        // Extract the encoded JWT
        let jwt = credential["encoded"];

        // Perform some local checks before sending to server
        let claims = decodeJWT(jwt);
        if (claims.error && claims.error != "Expired certificate") {
            // For any error except expiration, show an error and return
            showError(claims.error);
            //                        errorEl.style.display = ""
            window.history.back();
            return;
        }

        let theText = "";

        // Display the title of the page
        el.innerHTML += `<h3>Technical details</h3>`;

        // Display warning message only if expired
        if (claims.error) {
            el.innerHTML += `<p>The credential is expired so it can not be verified with the server. 
However some technical information about the credential follows.</p>`;
        }

        // Display the credential
        el.innerHTML += `<h4>About the credential</h4>`;

        // Header of the credential
        theText = prettyJSON(claims.header);
        el.innerHTML += `<p style="margin-bottom: 0"><strong>Header:</strong></p>
        <pre>${theText}</pre>`;

        // Body body of the credential
        theText = prettyJSON(claims.body);
        el.innerHTML += `<p style="margin-bottom: 0"><strong>Body:</strong></p>
        <pre>${theText}</pre>`;

        // Do not continue if the credential is expired
        if (claims.error) {
            return;
        }

        // If we reached here, the local verifications were successful
        // Verify with the server if local verifications were successful

        // Verify the jwt including the signature (queries Issuer signature in the blockchain)
        try {
            claims = await verifyJwtVc(jwt);
            console.log("DID Doc", claims.diddoc);
            console.log("Credential verified by server", claims);
        } catch (error) {
            failedmsg = error.responseText;
            showError("Credential verification failed" + failedmsg);
            window.history.back();
            return;
        }

        // Display the DID Document
        el.innerHTML += `<h4>DID Document of Issuer</h4>`;

        theText = prettyJSON(claims.diddoc);
        el.innerHTML += `<pre>${theText}</pre>`;
    }
};

function prettyJSON(json) {
    if (typeof json != "string") {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
        }
    );
}

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#issuerHome"] = async function (pageData) {
    console.log("=> Inside #issuerHome");
    // Populate the credential list in the page
    var element = document.querySelector("#issuerHome #issuer_cred_list");

    // Retrieve the list of credentials from the fake issuer server
    // The server must be the same one used by the verifier application
    var targetURL = FAKE_ISSUER_GET_CREDENTIALS;
    console.log(targetURL);
    $.get(targetURL, function (data) {
        console.log(data);
        // Fill the DOM of the verifier page with the received HTML
        // First remove all child elements
        $("#issuer_cred_list").empty();

        let creds = data.payload;

        creds.forEach(get_issuer_cred_list);
    });
};

function get_issuer_cred_list(credential, index, array) {
    console.log(credential);
    var credentialDecoded = decodeJWT(credential["cert"]);
    var schema = credentialDecoded["body"]["vc"]["credentialSchema"]["id"];

    var cred = "";
    var displayName = "";
    var subjectName = "";
    var cred_date = "";
    var analysisDate = "";
    var warning = "";
    var error_message = "";

    if (credentialDecoded.error) {
        warning = "failed";
    }

    if (schema == "covidTestResult") {
        displayName = "Covid19 certificate";
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"]["covidTestResult"];
        analysisDate = cred["analysis"]["date"];
        cred_date = formatDate(analysisDate * 1000);
        subjectName = cred["patient"]["name"];
    }

    if (schema == "vaccinationCredential") {
        displayName = "Vaccination certificate";
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"][
            "vaccinationCredential"
            ];
        analysisDate = cred["vaccination"]["date"];
        cred_date = formatDate(analysisDate * 1000);
        subjectName = cred["patient"]["name"];
    }

    if (schema == "publicCredential") {
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"]["publicCredential"];
        cred_date = "The date";
        displayName = cred["name"];
        subjectName = cred["entity"]["name"];
    }

    $("#issuer_cred_list").append(`
      <div class="card my-3 shadow ${warning}">

        <a onclick="transferViaQR('${credential["cert"]}')">
          <div class="card-body">
            <h5 class="card-title">${subjectName}</h5>
            <p>${displayName}</p>
            <p>${cred_date}</p>
          </div>
        </a>

      </div>`);
}

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#pubcreds"] = async function (pageData) {
    console.log("=> Inside #pubcreds");
    // Populate the credential list in the page
    var element = document.querySelector("#pubcreds #pub_cred_list");

    // Retrieve the list of credentials from the fake issuer server
    // The server must be the same one used by the verifier application
    var targetURL = FAKE_ISSUER_GET_PUBLIC_CREDENTIALS;
    console.log(targetURL);
    $.get(targetURL, function (data) {
        console.log(data);
        // Fill the DOM of the verifier page with the received HTML
        // First remove all child elements
        $("#pub_cred_list").empty();

        let creds = data.payload;
        let innerHTML = `<div class="row">`;

        for (let i = 0; i < creds.length; i++) {
            let credential = creds[i];

            console.log(credential);
            var credentialDecoded = decodeJWT(credential["cert"]);
            var schema = credentialDecoded["body"]["vc"]["credentialSchema"]["id"];

            console.log(schema);

            var cred = "";
            var displayName = "";
            var cred_date = "";
            var analysisDate = "";
            var warning = "";
            var error_message = "";
            var subjectName = "";

            if (credentialDecoded.error) {
                warning = "failed";
            }

            if (schema == "covidTestResult") {
                displayName = "Covid19 certificate";
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "covidTestResult"
                    ];
                analysisDate = cred["analysis"]["date"];
                cred_date = formatDate(analysisDate * 1000);
                subjectName = cred["patient"]["name"];
            }

            if (schema == "vaccinationCredential") {
                displayName = "Vaccination certificate";
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "vaccinationCredential"
                    ];
                analysisDate = cred["vaccination"]["date"];
                cred_date = formatDate(analysisDate * 1000);
                subjectName = cred["patient"]["name"];
            }

            if (schema == "publicCredential") {
                cred =
                    credentialDecoded["body"]["vc"]["credentialSubject"][
                    "publicCredential"
                    ];
                cred_date = formatDate(credentialDecoded["body"]["iat"] * 1000);
                displayName = cred["name"];
                subjectName = cred["entity"]["name"];
            }

            innerHTML += `
                            <div class="col-sm-6">
                                <div class="card my-3 shadow ${warning}">
                                    <a onclick="transferViaQR('${credential["cert"]}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${subjectName}</h5>
                                            <p>${displayName}</p>
                                            <p>${cred_date}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>`;
        }
        innerHTML += `</div>`;
        element.innerHTML = innerHTML;
    });
};

function get_pub_cred_list(credential, index, array) {
    console.log(credential);
    var credentialDecoded = decodeJWT(credential["cert"]);
    var schema = credentialDecoded["body"]["vc"]["credentialSchema"]["id"];

    console.log(schema);

    var displayName = "";
    var cred_date = "";
    var analysisDate = "";
    var warning = "";
    var error_message = "";
    var subjectName = "";

    if (credentialDecoded.error) {
        warning = "failed";
    }

    if (schema == "covidTestResult") {
        displayName = "Covid19 certificate";
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"]["covidTestResult"];
        analysisDate = cred["analysis"]["date"];
        cred_date = formatDate(analysisDate * 1000);
        subjectName = cred["patient"]["name"];
    }

    if (schema == "vaccinationCredential") {
        displayName = "Vaccination certificate";
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"][
            "vaccinationCredential"
            ];
        analysisDate = cred["vaccination"]["date"];
        cred_date = formatDate(analysisDate * 1000);
        subjectName = cred["patient"]["name"];
    }

    if (schema == "publicCredential") {
        cred =
            credentialDecoded["body"]["vc"]["credentialSubject"]["publicCredential"];
        cred_date = formatDate(credentialDecoded["body"]["iat"] * 1000);
        displayName = cred["name"];
        subjectName = cred["entity"]["name"];
    }

    $("#pub_cred_list").append(`
    <div class="col-sm-5">
      <div class="card my-3 shadow ${warning}">

        <a onclick="transferViaQR('${credential["cert"]}')">
          <div class="card-body">
            <h5 class="card-title">${subjectName}</h5>
            <p>${displayName}</p>
            <p>${cred_date}</p>
          </div>
        </a>
    </div>

      </div>`);
}

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#admin"] = async function (pageData) {
    // Add any initialization code here
};

document.querySelector("#adminClearLogsButton").onclick =
    function adminClearLogsButton() {
        clearLogs();
    };

document.querySelector("#adminResetDatabaseButton").onclick =
    function adminResetDatabaseButton() {
        resetDatabase();
    };

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#logsPage"] = async function (pageData) {
    console.log("=> Inside #logsPage");
    // Populate the credential list in the page
    var placeHolder = document.querySelector("#logsPage .placeHolder");

    var rlogs = await recentLogs();

    var h = "";
    for (let i = 0; i < rlogs.length; i++) {
        let format = "logging";
        if (rlogs[i].level == "E") {
            format = "loggingError";
        }
        let ts = new Date(rlogs[i].timestamp);
        let month = ts.getMonth() + 1;
        month = month.toString().padStart(2, "0");
        let day = ts.getDate().toString().padStart(2, "0");
        let hours = ts.getHours().toString().padStart(2, "0");
        let minutes = ts.getMinutes().toString().padStart(2, "0");
        let seconds = ts.getSeconds().toString().padStart(2, "0");

        let timestamp = month + day + "-" + hours + minutes + seconds;
        let desc = rlogs[i].desc;
        let item = rlogs[i].item;

        h = h + `<p class="${format}">${timestamp} ${desc} ${item}</p>`;
    }

    placeHolder.innerHTML = h;
};

// *****************************************************
// *****************************************************
// *****************************************************
// *****************************************************
pages["#diagnosticsPage"] = async function (pageData) {
    console.log("=> Inside #diagnosticsPage");
    // Populate the credential list in the page
    var h = document.querySelector("#diagnosticsPage .placeHolder");

    // Database
    h.innerHTML += `<p style="margin-bottom: 0">DB version: ${db.verno}</p>`;
    let dbnames = await Dexie.getDatabaseNames();
    h.innerHTML += `<p style="margin-bottom: 0">DB names: ${dbnames}</p>`;
    // Output the schema of each table:
    db.tables.forEach(function (table) {
        h.innerHTML += `<p style="margin-bottom: 0">Schema of ${table.name
            }:</p><pre>${JSON.stringify(table.schema, null, "  ")}</pre>`;
    });

    // Dimensions of the screen
    h.innerHTML += `<p style="margin-bottom: 0">Screen width: ${screen.width}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Screen height: ${screen.height}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Screen availWidth: ${screen.availWidth}</p>`;
    h.innerHTML += `<p style="margin-bottom: 10px">Screen availHeight: ${screen.availHeight}</p>`;

    let el = document.querySelector("html");
    h.innerHTML += `<p style="margin-bottom: 0">Html offsetHeight: ${el.offsetHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Html offsetWidth: ${el.offsetWidth}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Html clientHeight: ${el.clientHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 10px">Html clientWidth: ${el.clientWidth}</p>`;

    el = document.querySelector("body");
    h.innerHTML += `<p style="margin-bottom: 0">Body offsetHeight: ${el.offsetHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Body offsetWidth: ${el.offsetWidth}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Body clientHeight: ${el.clientHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 10px">Body clientWidth: ${el.clientWidth}</p>`;

    el = document.querySelector("#header");
    h.innerHTML += `<p style="margin-bottom: 0">Header offsetHeight: ${el.offsetHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Header offsetWidth: ${el.offsetWidth}</p>`;
    h.innerHTML += `<p style="margin-bottom: 0">Header clientHeight: ${el.clientHeight}</p>`;
    h.innerHTML += `<p style="margin-bottom: 10px">Header clientWidth: ${el.clientWidth}</p>`;

    h.innerHTML += `<h1>This is h1</h1>`;
    h.innerHTML += `<h2>This is h2</h2>`;
    h.innerHTML += `<h3>This is h3</h3>`;
    h.innerHTML += `<h4>This is h4</h4>`;
    h.innerHTML += `<h5>This is h5</h5>`;
};
