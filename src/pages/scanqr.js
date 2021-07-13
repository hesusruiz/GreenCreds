
import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";

import jsQR from "jsqr";


const tagName = "scanqr-page"

export class ScanQrPage extends JrmPage {

    constructor() {
        console.log("Inside constructor of DEMO PAGE")
        super("scanqr");
    }

    render() {
        // Use the parent class to build the full page
        return this.pageTemplate(
            html`
            <!-- =========================================== -->
            <!-- SCAN QR PAGE.                               -->
            <!--                                             -->
            <!-- =========================================== -->
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#passenger')">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#verifier')">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#issuerHome')">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#pubcreds')">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#admin')">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </a>
            </div>
            `
        )
    }
    enter() {
        console.log("Enter page DEMO")
        this.requestUpdate();
    }

}
customElements.define(tagName, ScanQrPage);

