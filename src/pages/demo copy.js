import { pages } from "../router";
import { w3 } from '../w3'
import '../css/w3.css'

import { LitElement, css, html, render } from 'lit';
import { header } from "./header";

// Add ourselves to the document body
let elem = document.createElement("demo-page")
document.body.append(elem)

export class DemoPage extends LitElement {

    constructor() {
        super();
        console.log("Inside constructor of DEMO PAGE")
        pages.set("#demo", this)
    }

    render() {
        let hh = header("main")
        return html`
    ${hh}
    <!-- =========================================== -->
    <!-- HOME PAGE for demos. It has several roles   -->
    <!-- and the user can choose                     -->
    <!-- =========================================== -->
    <div id="demo" class="jrmpage w3-container" style="max-width:600px">
    
        <div class="w3-panel w3-card-4">
            <a onclick="r.goHome()">
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
    
    </div>
    <!-- /page -->
        `;
    }
    createRenderRoot() {
        return this;
    }
    enter() {
        console.log("Enter page demoLit")
        this.requestUpdate();
    }
}
customElements.define('demo-page', DemoPage);
