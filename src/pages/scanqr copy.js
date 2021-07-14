
import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";

import { BrowserMultiFormatReader, BarcodeFormat, NotFoundException } from '@zxing/library';

const tagName = "scanqr-page"

export class ScanQrPage extends JrmPage {

    static styles = [
        this.styles,
        css`
        .radius {
            border-radius:50%;
        }
        `
    ];

    constructor() {
        console.log("Inside constructor of DEMO PAGE")
        super("verifier");

        // Initialise variables
        this.videoInputDevices = []
        this.selectedDeviceId = undefined

        // Initialise result text
        this.result = ""

        this.videoElem = undefined
    }

    createRenderRoot() {
        return this;
    }

    render() {

        let selectHtml = html``
        if (this.videoInputDevices.length > 0) {
            selectHtml = html`
            <label for="sourceSelect">Change video source:</label>
            <select id="sourceSelect" @change=${this.changed} style="max-width:400px">
                ${this.videoInputDevices.map((dev) =>
                    html`<option value="${dev.deviceId}" ?selected=${dev.deviceId === this.selectedDeviceId}>${dev.label}</option>`
                )};
            </select>
            `
        } 

        // Use the parent class to build the full page
        return this.pageTemplate(
            html`
            <!-- =========================================== -->
            <!-- SCAN QR PAGE.                               -->
            <!--                                             -->
            <!-- =========================================== -->
            
            <div>
                <button class="w3-button w3-indigo" @click="${this.btnStart}" >Start</button>
                <button class="w3-button w3-indigo" @click=${this.btnReset} >Reset</button>
            </div>
            
            <div id="videoPlaceholder">
            </div>
            
            <div id="sourceSelectPanel">
                ${selectHtml}
            </div>
            
            <label>Result:</label>
            <pre><code id="result">${this.result}</code></pre>
            
            `
        )
    }

    changed(e) {
        console.log(e.target.options[e.target.selectedIndex].value)
        this.selectedDeviceId = e.target.value;
    }

    async btnStart(e) {
        await this.decodeQR()
    }

    btnReset(e) {
        this.codeReader.reset()
        this.result = '';
        console.log('Reset.')
    }

    async decodeQR() {
        if (this.videoElem === undefined) {
            this.videoElem = document.createElement("video");
            let placeHolder = this.renderRoot.querySelector("#videoPlaceholder")
            placeHolder.append(this.videoElem)
        }

        this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
            if (result) {
                console.log("RESULT", result)
                this.result = result.text
                // Update visualisation
                this.requestUpdate();

            }
            if (err && !(err instanceof NotFoundException)) {
                console.error(err)
                this.result = err
            }
        })
        console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`)
    }

    async enter() {
        console.log("Enter page DEMO")

        // Initialize the QR library
        this.codeReader = new BrowserMultiFormatReader()
        console.log('ZXing code reader initialized')

        // Get the number of video devides
        this.videoInputDevices = await this.codeReader.listVideoInputDevices()
        this.selectedDeviceId = this.videoInputDevices[0].deviceId

        this.requestUpdate();
    }

}
customElements.define(tagName, ScanQrPage);
