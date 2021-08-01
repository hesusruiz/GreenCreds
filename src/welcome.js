import evidenceLogo60 from './img/evidenceLogo60.png'
import shield from './img/shield.png'
import cloud from './img/cloud.png'
import freeofcookie from './img/freeofcookie.png'
import v_hand from './img/v_hand.png'
import fight_covid from './img/fight_covid.png'


var preferredLanguage = navigator.language.substring(0,2)
let l = localStorage.getItem("preferredLanguage")
if (l) {preferredLanguage = l}
window.preferredLanguage = preferredLanguage

var i8nTexts = {
    "$intro01": {
        "en": "This application allows the verification of COVID certificates issued by EU Member States and also certificates issued by the UK Government with the same format as the EU Digital COVID Certificate",
        "es": "Esta aplicación permite la verificación de certificados COVID emitidos por los Estados Miembro de la UE y también los certificados emitidos por el Reino Unido con el mismo formato que el Certificado COVID Digital de la UE",
        "ca": "Aquesta aplicació permet la verificació dels certificats COVID emesos pels Estats membres de la UE i també els certificats emesos pel Regne Unit en el mateix format que el Certificat COVID digital de la UE"
    },
    "EU Digital COVID Credential Verifier": {
        "es": "Verificador de Credenciales COVID",
        "ca": "Verificador de Credencials COVID"
    },
    "Start verifying": {
        "es": "Comenzar a verificar",
        "ca": "Comença a verificar"
    },
    "Privacy policy": {
        "es": "Política de privacidad",
        "ca": "Política de privacitat"
    },
    "Terms & Conditions": {
        "es": "Términos y condiciones",
        "ca": "Termes d'ús"
    },
    "Language": {
        "es": "Idioma",
        "ca": "Llengua"
    },
    "Update public keys": {
        "es": "Actualizar llaves públicas",
        "ca": "Actualitza claus públiques"
    },
    "Easy & Secure": {
        "es": "Fácil y Seguro",
        "ca": "Fàcil i Segur"
    },
    "We don't save data": {
        "es": "No guardamos ningún dato",
        "ca": "No emmagatzemem cap dada"
    },
    "No installs": {
        "es": "Sin instalación",
        "ca": "Sense instal·lació"
    },
    "Free of cookies": {
        "es": "Libre de cookies",
        "ca": "Sense cookies"
    },
    "$callus": {
        "en": "If you are a public or private organization and want more information about this and similar solutions from Evidence Ledger, you can contact us via email",
        "es": "Si usted es una entidad pública o privada y desea más información sobre esta solución o similares de Evidence Ledger, puede contactarnos via email",
        "ca": "Si ets una entitat pública o privada i vols més informació sobre aquesta solució o similars Evidence Ledger, pots contactar amb nosaltres per correu electrònic"
    }

}


function T(key) {
    console.log("Preferred language", preferredLanguage)
    console.log(key)
    if ((preferredLanguage === "en") && (key.charAt(0) != "$")) { return key }
    let entry = i8nTexts[key]
    if (entry === undefined) { return key }
    let translated = entry[preferredLanguage]
    if (translated === undefined) { return key }
    return translated
}

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