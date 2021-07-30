import { AbstractPage } from './abstractpage'
import { html, svg } from 'lit-html';
import { goHome, gotoPage } from "../router";
import { T } from '../i18n/ii8';

var spinIcon = svg`
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`

export class Intro extends AbstractPage {

    constructor(domElem) {
        console.log("INTRO: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("INTRO: enter page")

        let theHtml = html`
<div class="sect-white">
    <h2 class="w3-margin-bottom">${T("EU Digital COVID Credential Verifier")}</h2>
    <p>${T("$intro01")}</p>

    <div class="w3-padding-16 w3-center">

        <button @click=${()=> gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
            w3-xlarge w3-round-xlarge">
            ${T("Start verifying")}</button>

    </div>
</div>

<div class="sect-green">
    <h2 class="fw-8 mb-32">Easy & Secure</h2>

    <div class="w3-row mb-16">
        <div class="w3-third mb-16">
            <img src="./img/shield.png" style="height:70px" alt="">
            <h2>We don't save data</h2>
        </div>
        <div class="w3-third mb-16">
            <img src="./img/cloud.png" style="height:70px" alt="">
            <h2>No installs</h2>
        </div>
        <div class="w3-third">
            <img src="./img/freeofcookie.png" style="height:70px" alt="">
            <h2>Free of cookies</h2>
        </div>
    </div>

    <div>
        <img src="./img/v_hand.png" style="height:70px" alt="" />
    </div>
    <div>
        <button @click=${()=> gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
            w3-xlarge w3-round-xlarge">
            ${T("Start verifying")}</button>

    </div>

</div>

<div class="sect-dark">
    <div class="margin-bottom">
        If you are a public or private organization and want more information about this and similar solutions from
        Evidence Ledger, you can contact us via email
    </div>
    <div>
        <p>Send Email as Government</p>
        <p>Send Email as Enterprise</p>
    </div>


    <div>
        <img src="./img/fight_covid.png" style="height:70px" alt="" />
    </div>
    <div>
        <p>Legal information</p>
    </div>
    <div>
        <p class="fore-primary">Evidence Ledger 2021</p>
    </div>

</div>



        `

        this.render(theHtml)
    }
}

