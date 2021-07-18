import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";
import { gotoPage } from "../router-elem";

const tagName = "demo-page"

export class DemoPage extends JrmPage {
    static get properties() {
        return {
            perico1: { type: Object },
            perico2: { attribute: false },
        };
    }

    constructor() {
        console.log("Inside constructor of DEMO PAGE")
        super();
        this.perico1 = "default 111111"
        this.perico2 = "default 222222"
    }

    render() {
        // Use the parent class to build the full page
        return html`
        <!-- =========================================== -->
        <!-- HOME PAGE for demos. It has several roles   -->
        <!-- and the user can choose                     -->
        <!-- =========================================== -->
        
        <div class="w3-container">
            <a @click=${() => gotoPage("passenger")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("verifier")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("issuerHome")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("pubcreds")}>
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("admin")}>
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
        </div>
        `
    }
    enter() {
        console.log("Enter page DEMO", this.perico1, this.perico2)
        this.style.display = "block"
        this.requestUpdate();
    }

}
customElements.define(tagName, DemoPage);

