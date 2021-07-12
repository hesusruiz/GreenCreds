
import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";

const tagName = "verifier-page"

export class VerifierPage extends JrmPage {

    constructor() {
        console.log("Inside constructor of VERIFIER PAGE")
        super("verifier");
    }

    render() {
        // Use the parent class to build the full page
        return this.pageTemplate(
            html`
            <!-- =========================================== -->
            <!-- HOME PAGE for demos. It has several roles   -->
            <!-- and the user can choose                     -->
            <!-- =========================================== -->
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.goHome()">
                    <h3>Inside verifier</h3>
                    <p>Receive or show your test results</p>
                </a>
            </div>
            `
        )
    }

}
customElements.define(tagName, VerifierPage);

