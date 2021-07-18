import { route, gotoPage } from "../router-elem";
import { w3styles } from '../w3styles'
import { LitElement, css, html, render as renderlit } from 'lit';
import {log} from '../log'
import { BrowserMultiFormatReader, BarcodeFormat, NotFoundException } from '@zxing/library';

import { CWT, HCERT, trustedList, vs, } from "../components/cwt"


var tagName = "scanqr-page"

var chapuza = ""

export class ScanQrPage extends LitElement {

    static styles = [
        w3styles,
        css`
        #footer {
            position: fixed;
            bottom: 0
        }
        `
    ];

    static get properties() {
        return {
            pepe: {attribute: true}
        };
    }

      constructor() {
        console.log("Inside constructor of SCANQR")
        super();

        // Initialize the QR library
        this.codeReader = new BrowserMultiFormatReader()

        // Initialise variables
        this.videoInputDevices = []
        this.selectedDeviceId = undefined
        this.selectHtml = html``
        this.resultObj = undefined
        this.result = undefined

        this.videoElem = undefined
    }

    render() {
        // Render just the minimum. The real action takes place in the enter() function
        // This is so because it has to be asynchronous
        // Use the parent class to build the full page
        return html`
        <!-- =========================================== -->
        <!-- SCAN QR PAGE.                               -->
        <!-- =========================================== -->
                    
        <div id="videoPlaceholder">
        </div>
        
        <div id="footer" class="w3-bar w3-xlarge">
            ${(this.videoInputDevices.length > 0)
                ? html`
                    ${this.getCamerasList()}
                    <button class="w3-btn w3-indigo w3-xlarge w3-hover-indigo" @click=${this.toggleView}>
                        Select Camera
                    </button>`
                : html``
                }
        </div>
        `
    }

    toggleView(e) {
        var x = this.renderRoot.querySelector("#selectList");
        x.classList.toggle("w3-show")
    }

    getCamerasList() {
        // Generate the selection list (if there are video devices)
        let theHtml = html``
        if (this.videoInputDevices.length > 0) {
            theHtml = html`
            <ul id="selectList" class="w3-ul w3-border w3-white w3-hide w3-large" >
                ${this.videoInputDevices.map((dev) =>
                    html`<li class=${(dev.deviceId === this.selectedDeviceId) ? "w3-large w3-pale-blue" : "w3-large"} id="${dev.deviceId}" @click=${this.selected}>${(dev.deviceId === this.selectedDeviceId) ? html`*` : html``} ${dev.label}</li>`
                )}
            </ul>
            `
        }
        return theHtml
    }

    async enter() {
        console.log("SCANQR Enter", this.clientWidth)
        this.style.display = "block"

        this.result = undefined

        if (this.videoElem === undefined) {

            // In a mobile we want the main camera
            let constraints = {
                video: {
                    facingMode: "environment"
                },
            };

            // Request permission from the user and get the media stream
            try {
                var stream = await navigator.mediaDevices.getUserMedia(constraints);
            } catch (e) {
                if (e instanceof NotAllowedError) {
                    // The user did not provide authorisation
                    // TODO: inform the user that she has to autorise access and retry
                    throw e
                }
                if (e instanceof NotFoundError) {
                    // The requested "environment" camera not found
                    // TODO: inform the user to select another camera
                    throw e
                }
            }

            // Get the deviceId associated to the "environment" video device
            let streamDeviceId = stream.getVideoTracks()[0].getSettings().deviceId
            this.selectedDeviceId = streamDeviceId

            // Get the list of all video devices in the machine, to let the user select one later
            this.videoInputDevices = await this.codeReader.listVideoInputDevices()

            // Get the placeholder element where video element will be created
            let placeHolder = this.renderRoot.querySelector("#videoPlaceholder")

            // Create the 'video' element to show the video from the camera
            this.videoElem = document.createElement("video");
            // Use the width of its parent
            this.videoElem.style.width = "100%"

            // And add the video element to its parent
            placeHolder.append(this.videoElem)
        }

        // Call the QR decoder using the video element just created
        this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
            if (result) {
                console.log("RESULT", result)
                this.codeReader.reset()
                gotoPage("scanresult", result)

            }
            if (err && !(err instanceof NotFoundException)) {
                console.error(err)
                this.result = err
                this.requestUpdate()
            }
        })
        console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`)

        this.requestUpdate()

    }

    selected(e) {
        console.log(e.target.id)
        
        this.selectedDeviceId = e.target.id;
        this.toggleView()
        this.codeReader.reset()
        this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
            if (result) {
                console.log("RESULT", result)
                this.codeReader.reset()
                gotoPage("scanresult", result)

            }
            if (err && !(err instanceof NotFoundException)) {
                console.error(err)
                this.result = err
                this.requestUpdate()
            }
        })
        console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`)
        this.requestUpdate()
    }

    async exit() {
        this.codeReader.reset()
    }

}
customElements.define(tagName, ScanQrPage);

//*********************************************************************** */
//*********************************************************************** */
//*********************************************************************** */
//*********************************************************************** */
//*********************************************************************** */

tagName = "scanqr-result"

export class ScanQrResultPage extends LitElement {

    static styles = [
        w3styles,
        css`
        #footer {
            position: fixed;
            bottom: 0
        }
        `
    ];

    static get properties() {
        return {
            pepe: {attribute: true}
        };
    }

      constructor() {
        console.log("Inside constructor of SCANRESULT")
        super();

        this.thehtml = ""
        this.qrContent = ""
        this.hcert = undefined
        this.verified = false

    }

    render() {
        return html`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `
    }

    async enter(pageData) {
        console.log("PRESENT Enter", pageData)
        this.qrContent = pageData.text
        this.style.display = "block"

        // Decode credential verifying it at the same time
        try {
            this.hcert = await CWT.decodeHC1QR(this.qrContent, true);            
            this.verified = this.hcert[3]
        } catch (error) {
            log.myerror("Error verifying credential", error)
            return;
        }
    
        try {
            // Render the credential
            this.thehtml = renderDetail(this.hcert);            
        } catch (error) {
            log.myerror("Error rendering credential", error)
            return;            
        }

        this.requestUpdate()

    }

    async exit() {
    }

}
customElements.define(tagName, ScanQrResultPage);


function renderDetail(cred) {
    // The credential
    let payload = cred[1];

    let thehtml = "Unrecognized";

    if (payload["certType"] == "v") {
        thehtml = html`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Vaccination</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${payload.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${payload.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Vaccination details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${payload.certificateIssuer}</div>
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${payload.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                    <div class="valor mb-3">${payload.vaccineProphylaxis}</div>

                    <div class="etiqueta">Vaccine medicinal product</div>
                    <div class="valor mb-3">${payload.medicinalProduct}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${payload.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Dose number/Total doses</div>
                    <div class="valor mb-3">${payload.doseNumber}/${payload.doseTotal}</div>

                    <div class="etiqueta">Date of vaccination</div>
                    <div class="valor mb-3">${payload.dateVaccination}</div>

                    <div class="etiqueta">Member State of vaccination</div>
                    <div class="valor">${payload.country}</div>
                </div>
            </div>

        </div>
        `;
    }

    if (payload["certType"] == "t") {
        thehtml = html`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Test</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${payload.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${payload.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Test details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${payload.certificateIssuer}</div>        
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${payload.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Name</div>
                    <div class="valor mb-3">${payload.typeTest}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${payload.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Result</div>
                    <div class="valor mb-3">${payload.testResult}</div>

                    <div class="etiqueta">Date/Time of Sample Collection</div>
                    <div class="valor mb-3">${payload.timeSample}</div>

                    <div class="etiqueta">Testing Centre</div>
                    <div class="valor">${payload.testingCentre}</div>
                </div>
            </div>

        </div>
        `;
    }

    if (payload["certType"] == "r") {
        thehtml = html`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Recovery</div>
        </div>
        
        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${payload.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${payload.dateOfBirth}</div>
            </div>
        </div>
        
        <div class="container">
            <div class="hcert subtitle">Recovery details</div>
        </div>
        
        <div class="container mb-2 border">
            <div class="row">
              <div class="col">
                <div class="etiqueta mt-3">Disease targeted</div>
              </div>
              <div class="col">
                <div class="valor mt-3">${payload.diseaseTargeted}</div>
              </div>
            </div>
        </div>
        
        
        <div class="container border">
        
            <div class="row mb-3">
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Date of positive</div>
                    <div class="valor mb-3">${payload.datePositive}</div>
                </div>            
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid from</div>
                    <div class="valor mb-3">${payload.dateFrom}</div>
                </div>
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid to</div>
                    <div class="valor">${payload.dateUntil}</div>
                </div>
        
            </div>
        
        </div>
        
        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>
        
                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${payload.certificateIssuer}</div>        
        
                    <div class="etiqueta">Country of Test</div>
                    <div class="valor">${payload.country}</div>        
        
                </div>
        
            </div>
        </div>
        `;
    }

    return thehtml;
}