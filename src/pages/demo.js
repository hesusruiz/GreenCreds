
import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";

const tagName = "demo-page"

export class DemoPage extends JrmPage {

    constructor() {
        console.log("Inside constructor of DEMO PAGE")
        super("demo");
    }

    render() {
        // Use the parent class to build the full page
        return this.pageTemplate(
            html`
            <!-- =========================================== -->
            <!-- HOME PAGE for demos. It has several roles   -->
            <!-- and the user can choose                     -->
            <!-- =========================================== -->
            
            <a onclick="r.gotoPage('#passenger')">
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a onclick="r.gotoPage('#verifier')">
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>
            
            <a onclick="r.gotoPage('#issuerHome')">
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a onclick="r.gotoPage('#pubcreds')">
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a onclick="r.gotoPage('#admin')">
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
            `
        )
    }
    enter() {
        console.log("Enter page DEMO")
        this.requestUpdate();
    }

}
customElements.define(tagName, DemoPage);

