import { AbstractPage } from '../pages/abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";
import translations from "./translations.json"

export var lang = "en"

export function T(key) {
    if ((lang === "en") && (key.charAt(0) != "$")) { return key }

    let entry = translations[key]
    if (entry === undefined) { return key }
    let translated = entry[lang]
    if (translated === undefined) { return key }
    return translated
}

export class SelectLanguage extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {

        let theHtml = html`
<div class="w3-container" style="padding:10px 0px;">

    <ul class="w3-ul w3-card-4">

        <li class="w3-bar" @click=${()=>this.selectLang("en")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src="./i18n/flags/uk.png" style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">English</span>
            </div>
        </li>

        <li class="w3-bar" @click=${()=>this.selectLang("ca")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src="./i18n/flags/ca.png" style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">Català</span>
            </div>
        </li>

        <li class="w3-bar" @click=${()=>this.selectLang("es")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src="./i18n/flags/es.png" style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">Español</span>
            </div>
        </li>

    </ul>
</div>
`
        this.render(theHtml)
    }

    selectLang(l) {
        console.log("Selecting language", l)
        lang = l
        window.history.back()
    }
}

