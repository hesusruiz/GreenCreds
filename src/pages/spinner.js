import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";

export class Spinner extends AbstractPage {

    constructor(domElem) {
        console.log("SPINNER: inside constructor")
        super(domElem)
    }

    enter(pageData) {
        console.log("SPINNER: enter page")

        let theHtml = html`
        <div class="loaderpage">
            <h2>Loading</h2>
            <p>Please wait...</p>
            <div class="loader"></div>
        </div>        
        `

        this.render(theHtml)
        window.location.reload()
    }
}

