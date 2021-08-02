import evidenceLogo60 from './img/evidenceLogo60.png'
import shield from './img/shield.png'
import cloud from './img/cloud.png'
import freeofcookie from './img/freeofcookie.png'
import v_hand from './img/v_hand.png'
import fight_covid from './img/fight_covid.png'
import { T } from './i18n/translate'

export function initialScreen() {

    var initialScreenHTML = `

    <div class="w3-bar w3-xlarge color-primary">
        <img class="w3-bar-item" style="padding:0" href="javascript:void(0)" src=${evidenceLogo60} width="120px" alt="">
        <a href="javascript:void(0)" class="w3-bar-item btn-menu w3-right">&#9776;</a>
    </div>


    <div class="sect-white">
        <h2 class="w3-margin-bottom">${T("EU Digital COVID Credential Verifier")}</h2>
        <p>${T("$intro01")}</p>

        <div class="w3-padding-16 w3-center">

            <button class="w3-button btn-color-primary btn-hover-color-primary
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
            <button class="w3-button btn-color-primary btn-hover-color-primary
                w3-xlarge w3-round-xlarge">
                ${T("Start verifying")}</button>

        </div>

    </div>

    <div class="sect-dark">
        <div class="margin-bottom">
            ${T("$callus")}
        </div>
        <div>
            <p>Send Email as Government</p>
            <p>Send Email as Enterprise</p>
        </div>


        <div>
            <img src=${fight_covid} style="height:70px" alt="" />
        </div>
        <div>
            <p>Legal information</p>
        </div>
        <div>
            <p class="fore-primary">Evidence Ledger 2021</p>
        </div>

    </div>

`
    document.body.innerHTML = initialScreenHTML

}

window.initialScreen = initialScreen
initialScreen()