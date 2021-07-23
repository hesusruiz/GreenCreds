import { gotoPage } from "../router";
import { html } from 'lit-html';
import {log} from '../log'
import { BrowserMultiFormatReader, BarcodeFormat, NotFoundException } from '@zxing/library';

import { AbstractPage } from './abstractpage'


export class ScanQrPage extends AbstractPage {

    constructor(domElem) {
        console.log("SCANQR: Inside constructor")
        super(domElem);

        // Initialize the QR library
        this.codeReader = new BrowserMultiFormatReader()

        // Initialise variables
        this.videoInputDevices = []
        this.selectedDeviceId = undefined
        this.selectHtml = html``
        this.resultObj = undefined
        this.result = undefined

        this.videoElem = undefined
        this.self = this
    }

    _render() {
        return html`
        <!-- =========================================== -->
        <!-- SCAN QR PAGE.                               -->
        <!-- =========================================== -->
                    
        <div id="videoPlaceholder">
        </div>
        
        <div id="footer" class="w3-bar w3-xlarge w3-center" style="position: fixed;bottom: 20px">
            ${(this.videoInputDevices.length > 0)
                ? html`
                    ${this.getCamerasList()}
                    <button class="w3-btn color-primary w3-xlarge hover-color-primary" @click=${this.toggleView}>
                        Select Camera
                    </button>`
                : html``
                }
        </div>
        `
    }

    toggleView(e) {
        var x = document.querySelector("#selectList");
        x.classList.toggle("w3-show")    
    }

    getCamerasList() {
        // Generate the selection list (if there are video devices)
        let theHtml = html``
        if (this.videoInputDevices.length > 0) {
            theHtml = html`
            <ul id="selectList" class="w3-ul w3-border w3-white w3-hide w3-large" >
                ${this.videoInputDevices.map((dev) =>
                    html`<li class=${(dev.deviceId === this.selectedDeviceId) ? "w3-large w3-pale-blue" : "w3-large"} id="${dev.deviceId}" @click=${()=>this.selected(dev.deviceId)}>${(dev.deviceId === this.selectedDeviceId) ? html`*` : html``} ${dev.label}</li>`
                )}
            </ul>
            `
        }
        return theHtml
    }

    async enter() {
        console.log("SCANQR Enter", this.clientWidth)

        this.result = undefined

        // Prepare the screen, waiting for the video
        this.render(this._render())

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
            let placeHolder = document.querySelector("#videoPlaceholder")

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
                processQRpiece(result)

            }
            if (err && !(err instanceof NotFoundException)) {
                console.error(err)
                this.result = err
                this.requestUpdate()
            }
        })
        console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`)

        this.render(this._render())

    }

    selected(deviceId) {
        
        this.selectedDeviceId = deviceId;
        var x = document.querySelector("#selectList");
        x.classList.toggle("w3-show")
    
        this.codeReader.reset()
        this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
            if (result) {
                console.log("RESULT", result)
                this.codeReader.reset()
                processQRpiece(result)

            }
            if (err && !(err instanceof NotFoundException)) {
                console.error(err)
                this.result = err
                this.render(this._render())
            }
        })
        console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`)
        this.render(this._render())
    }

    async exit() {
        this.codeReader.reset()
    }

}


const QR_UNKNOWN = 0
const QR_URL = 1
const QR_MULTI = 2
const QR_HC1 = 3

async function processQRpiece(readerResult) {
    let qrData = readerResult.text

    let qrType = detectQRtype(qrData)

    // Display data of a normal QR
    if (qrType === QR_UNKNOWN || qrType === QR_URL) {
        gotoPage("displayNormalQR", qrData)
        return;
    }

    // Handle HCERT data
    if (qrType === QR_HC1) {
        gotoPage("displayhcert", qrData)
        return;
    }

}



function detectQRtype(qrData) {
    // Try to detect the type of data received
  
    console.log("detectQRtype:", qrData);
    if (!qrData.startsWith) {
        log.myerror("detectQRtype: data is not string")
    }
  
    if (qrData.startsWith("https")) {
      // We require secure connections
      // Normal QR: we receive a URL where the real data is located
      return QR_URL;
    } else if (qrData.startsWith("multi|w3cvc|")) {
      // A multi-piece JWT
      return QR_MULTI;
    } else if (qrData.startsWith("HC1:")) {
      return QR_HC1;
    } else {
        return QR_UNKNOWN
    }
}

