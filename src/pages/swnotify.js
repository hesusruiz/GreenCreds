import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";

export class SWNotify extends AbstractPage {

    constructor(domElem) {
        console.log("SWNOTIFY: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("SWNOTIFY: enter page")

        let theHtml = html`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>Application updated</h1>
                </header>
        
                <div class="w3-container w3-padding-16">
                    <p>There is a new version of the application and it has already been updated.</p>
                    <p>Please click Accept to refresh the page.</p>
                </div>
        
                <div class="w3-padding-16">
        
                    <button @click=${()=>gotoPage("spinner")} class="w3-button color-primary hover-color-primary w3-xlarge">Accept</button>
        
                </div>
        
            </div>
        </div>
        `

        this.render(theHtml)
    }
}

