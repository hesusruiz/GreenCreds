import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';

export class Page404 extends AbstractPage {

    constructor(domElem) {
        console.log("PAGE404: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("PAGE404: enter page")

        let theHtml = html`
        <div class="w3-container">
            <h1>The page does not exist!</h1>
        </div>
        `

        this.render(theHtml)
    }
}

