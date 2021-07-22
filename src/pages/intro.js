import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";

export class Intro extends AbstractPage {

    constructor(domElem) {
        console.log("INTRO: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("INTRO: enter page")

        let theHtml = html`
        <div class="container" style="margin-top:100px;">
            <h2 class="w3-margin-bottom">EU Digital COVID Credential Verifier</h2>
            <p>This application allows the verification of COVID certificates issued by EU Member States and also certificates
                issued by the UK Government with the same format as the EU Digital COVID Certificate</p>
        
            <div class="w3-padding-16 w3-center">
        
                <button @click=${()=> gotoPage("verifier")} class="w3-button color-primary hover-color-primary
                    w3-xlarge">Start verifying</button>
        
            </div>
        </div>
        `

        this.render(theHtml)
    }
}

