import { pages } from "../router";
import { w3 } from '../w3'
import { w3styles } from '../w3styles'


import { LitElement, css, html, render } from 'lit';

const tagName = "prueba-tag"

export class Prueba extends LitElement {

    static styles = [
        w3styles
    ];

    static get properties() {
        return {
            name: { type: String }
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <button class="w3-indigo">Hola</button>
        `
    }
    enter() {
        console.log("Enter page")
        this.requestUpdate();
    }
}

customElements.define(tagName, Prueba);

// Add ourselves to the document body
let elem = document.createElement(tagName)
document.body.append(elem)
