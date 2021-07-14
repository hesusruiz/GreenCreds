import { pages } from "../router";
import { w3styles } from '../w3styles'
import { LitElement, css, html, render as renderlit } from 'lit';
import {log} from '../log'
import { BrowserMultiFormatReader, BarcodeFormat, NotFoundException } from '@zxing/library';

const tagName = "scanqr-page"

export class ScanQrPage extends LitElement {

    static styles = [
        w3styles
    ];

    static get properties() {
        return {
            pepe: {attribute: true}
        };
    }

      constructor() {
        console.log("Inside constructor of SCANQR")
        super();
        this.pageName = "verifier"
        // Add the page to the routing table
        pages.set('#' + this.pageName, this)

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

    // Do not render to the Shadow DOM
    createRenderRoot() {
        return this;
    }

    render() {
        // Render just the minimum. The real action takes place in the enter() function
        if (this.result === undefined) {
            // Use the parent class to build the full page
            return html`
                <!-- =========================================== -->
                <!-- SCAN QR PAGE.                               -->
                <!--                                             -->
                <!-- =========================================== -->
                            
                <div id="videoPlaceholder">
                </div>
                
                <div id="sourceSelectPanel">
                    ${this.selectHtml}
                </div>               
                `
        } else {
            return html`
                <!-- =========================================== -->
                <!-- SCAN QR PAGE.                               -->
                <!--                                             -->
                <!-- =========================================== -->
                
                <label>Result:</label>
                <pre><code id="result">${this.result}</code></pre>                
                `
        }

    }

    attributeChangedCallback() {
        console.log("AttributeChangedCallback has been called")
    }

    async enter() {
        console.log("SCANQR Enter", this.clientWidth)

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

            // Generate the selection list (if there are video devices)
            if (this.videoInputDevices.length > 0) {
                this.selectHtml = html`
                <label for="sourceSelect">Change video source:</label>
                <select id="sourceSelect" @change=${this.changed}>
                    ${this.videoInputDevices.map((dev) =>
                        html`<option value="${dev.deviceId}" ?selected=${dev.deviceId === this.selectedDeviceId}>${dev.label}</option>`
                    )};
                </select>
                `
            } 

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
                this.resultObj = result
                this.result = result.text
                this.codeReader.reset()
                // Update visualisation
                this.requestUpdate();

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

    changed(e) {
        console.log(e.target.options[e.target.selectedIndex].value)
        this.selectedDeviceId = e.target.value;
        this.codeReader.reset()
        this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
            if (result) {
                console.log("RESULT", result)
                this.resultObj = result
                this.result = result.text
                // Update visualisation
                this.requestUpdate();

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
