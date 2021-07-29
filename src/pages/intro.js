import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";
import { T } from '../i18n/ii8';

export class Intro extends AbstractPage {

    constructor(domElem) {
        console.log("INTRO: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("INTRO: enter page")

        let theHtml = html`
        <div class="container w3-center" style="margin-top:50px;">
            <h2 class="w3-margin-bottom">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>
        
            <div class="w3-padding-16 w3-center">
        
                <button @click=${() => gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
                    w3-xlarge w3-round-xlarge">${T("Start verifying")}</button>
        
            </div>
        </div>
        `

        this.render(theHtml)
    }
}

