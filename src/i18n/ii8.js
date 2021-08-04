import { AbstractPage } from '../pages/abstractpage'
import { html } from 'lit-html';

import ukflag from './flags/uk.png'
import esflag from './flags/es.png'
import caflag from './flags/ca.png'
import frflag from './flags/fr.png'
import deflag from './flags/de.png'
import itflag from './flags/it.png'

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
                <img src=${ukflag} style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">English</span>
            </div>
        </li>

        <li class="w3-bar" @click=${()=>this.selectLang("ca")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src=${caflag} style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">Català</span>
            </div>
        </li>

        <li class="w3-bar" @click=${()=>this.selectLang("es")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src=${esflag} style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">Español</span>
            </div>
        </li>

        <li class="w3-bar" @click=${()=>this.selectLang("fr")}>
            <div class="w3-bar-item" style="padding:8px;">
                <img src=${frflag} style="padding:8px;width:70px">
                <span class="h3" style="vertical-align:middle;">Français</span>
            </div>
        </li>

    </ul>
</div>
`
        this.render(theHtml)
    }

    async selectLang(l) {
        console.log("Selecting language", l)
        window.preferredLanguage = l
        localStorage.setItem("preferredLanguage", l)
        window.history.back()
    }
}

