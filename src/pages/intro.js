import { AbstractPage } from './abstractpage'
import { html, svg } from 'lit-html';
import { goHome, gotoPage } from "../router";
import { T } from '../i18n/translate';

import shield from '../img/shield.png'
import cloud from '../img/cloud.png'
import freeofcookie from '../img/freeofcookie.png'
import v_hand from '../img/v_hand.png'
import fight_covid from '../img/fight_covid.png'

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
                <h2 class="fw-8 mb-32">${T("Easy & Secure")}</h2>

                <div class="w3-row mb-16">
                    <div class="w3-third mb-16">
                        <img src=${shield} style="height:70px" alt="">
                        <h2>${T("We don't save data")}</h2>
                    </div>
                    <div class="w3-third mb-16">
                        <img src=${cloud} style="height:70px" alt="">
                        <h2>${T("No installs")}</h2>
                    </div>
                    <div class="w3-third">
                        <img src=${freeofcookie} style="height:70px" alt="">
                        <h2>${T("Free of cookies")}</h2>
                    </div>
                </div>

                <div>
                    <img src=${v_hand} style="height:70px" alt="" />
                </div>
                <div>
                    <button @click=${()=> gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
                        w3-xlarge w3-round-xlarge">
                        ${T("Start verifying")}</button>

                </div>

            </div>

            <div class="sect-dark">
                <div class="margin-bottom">
                    ${T("$callus")}
                </div>
                <div>
                    <a href="mailto:government@evidenceledger.eu">Send Email as Government</a>
                </div>
                <div>
                    <a href="mailto:enterprise@evidenceledger.eu">Send Email as Enterprise</a>
                </div>


                <div>
                    <img src=${fight_covid} style="height:70px" alt="" />
                </div>
                <div>
                    <a @click=${()=>gotoPage("termsOfUse")} href="javascript:void(0)">
                    ${T("Terms & Conditions")}
                    </a>
                </div>
                <div>
                    <a @click=${()=>gotoPage("privacyPolicy")} href="javascript:void(0)">
                    ${T("Privacy policy")}
                    </a>
                </div>
                <div>
                    <p style="font-weight:600">*This website does not use cookies</p>
                </div>
                <div>
                    <p class="fore-primary">Evidence Ledger 2021</p>
                </div>

            </div>

        `

        this.render(theHtml)
    }
}

