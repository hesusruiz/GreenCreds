import { route } from "../router-elem";
import { w3styles } from '../w3styles'

import { LitElement, css, html, render } from 'lit';
import '../components/header'

var tagName = "page-404"

export class Page404 extends LitElement {

    static styles = [
        w3styles
    ];

    constructor() {
        console.log("Inside constructor of PAGE404")
        super();

    }

    render() {
        return html`
        <div class="jrmpage w3-container">
            <h1>The page does not exist!</h1>
        </div>
        `
    }

    enter() {
        console.log("Enter page")
        this.style.display = "block"
        this.requestUpdate();
    }
}

customElements.define(tagName, Page404);