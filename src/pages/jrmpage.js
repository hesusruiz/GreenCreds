import { pages } from "../router";
import { w3styles } from '../w3styles'

import { LitElement, css, html, render } from 'lit';
import '../components/header'


export class JrmPage extends LitElement {

    static styles = [
        w3styles
    ];

    constructor(pageName = "default") {
        console.log("Inside constructor of JRMPAGE")
        super();
        this.pageName = pageName
        // Add the page to the routing table
        pages.set('#' + pageName, this)

    }

    pageTemplate(pageBody) {
        return html`
        <header-bar></header-bar>
        <div id="${this.pageName}" class="jrmpage w3-container">
            ${pageBody}
        </div>
        `
    }
    // createRenderRoot() {
    //     return this;
    // }
    enter() {
        console.log("Enter page")
        this.requestUpdate();
    }
}
