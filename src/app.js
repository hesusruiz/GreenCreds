//import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-window.prod.mjs'

import {
    settingsPut,
    settingsGet,
} from "./db";
import {log} from './log'

import { setHomePage, goHome, route } from "./router-elem";

import { trustedList, vs } from "./components/cwt";

import './pages/passenger_home'
import './pages/demo'
import './pages/scanqr'
import './pages/hcertpage'
import './pages/page404'

var pageDefs = [
    {
        name: "displayhcert",
        tagName: "div",
    },
    {
        name: "demo",
        tagName: "demo-page"
    },
    {
        name: "passenger",
        tagName: "passenger-home"
    },
    {
        name: "verifier",
        tagName: "scanqr-page"
    },
    {
        name: "scanresult",
        tagName: "scanqr-result"
    },
    {
        name: "page404",
        tagName: "page-404"
    },
]

document.body.innerHTML = ""
let routerElem = document.createElement("router-elem")
document.body.append(routerElem)

for (let i = 0; i < pageDefs.length; i++) {
    let elem = document.createElement(pageDefs[i].tagName)
    elem.style.display = "none"
    document.body.append(elem)
    route(pageDefs[i].name, elem)
}

// Get the pathname used to invoke the app, eg.: /admin.html
var mypathname = window.location.pathname;
var homePage = "verifier"

if (window.location.search.length > 0) {
    // Get the search parameters, eg.: ?page=admin
    let searchParams = new URLSearchParams(window.location.search);

    // Check for query string specifying the initial page
    if (searchParams.get("home") !== null) {
        // ?verifier
        homePage = "passenger";
    } else if (searchParams.get("verifier") !== null) {
        // ?verifier
        homePage = "verifier";
    } else if (searchParams.get("demo") !== null) {
        // ?demo
        homePage = "demo";
    } else if (searchParams.get("admin") !== null) {
        // ?admin
        homePage = "admin";
    } else if (searchParams.get("pubcred") !== null) {
        // ?pubcred
        homePage = "pubcreds";
    } else {
        log.mywarn("URL parameter not recognised", window.location.search)
    }
}

console.log("Home_page:", homePage)

setHomePage(homePage)


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


// Screen types for display of QR data
const ST_PASSENGER_SCAN = "fromPassengerScan";
const ST_VERIFIER_SCAN = "fromVerifierScan";
const ST_NORMAL = "normal";

const INSTALL_SERVICE_WORKER = false

// This function is called on first load and when a refresh is triggered in any page
// When called the DOM is fully loaded and safe to manipulate
window.addEventListener('load', async (event) => {

    // Handle one-time initialization when the user executes for the first time the app
    await performOneTimeInitialization();

    // Install service worker for off-line support
    if (INSTALL_SERVICE_WORKER && ("serviceWorker" in navigator)) {
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
    let paramsString = window.location.search;
    let searchParams = new URLSearchParams(paramsString);

    let credId = searchParams.get("id");
    if (credId) {
        // Build the URL of the server to retrieve the credential
        var targetURLRead = ISSUER_GET_CREDENTIAL + credId;

        // Request the credential
        await requestQRAndDisplay(
            targetURLRead,
            "displayCredentialPage",
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
            "displayCredentialPage",
            ST_PASSENGER_SCAN
        );

        return;
    }

    // Show current page and execute logic on page transition
    await goHome();

});


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
    // TODO: ask the user to refresh the application
    window.location.reload();

}


// Initialize the app when the user downloads the application for the first time,
// or when a factory reset is performed by the user
// The function is safe to be called many times
async function performOneTimeInitialization() {
    console.log("Performing OneTime Initialization");

    // Check if this is the first time that the user downloads the app
    // There is a persistent flag in the local storage
    var alreadyInitialized = await settingsGet("initialized");

    if (alreadyInitialized != true) {
        try {
            // Save the host from where the app was loaded
            await settingsPut("apiHost", MY_SERVER);
        } catch (error) {
            // Log the error
            log.myerror("Onetime initialization error");
        }

        // Signal that we already performed initialization
        await settingsPut("initialized", true);
    }
}



