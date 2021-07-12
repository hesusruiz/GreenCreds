import { pages } from "../router";
import { w3 } from '../w3'
import '../css/w3.css'

import { LitElement, css, html, render } from 'lit';

// Add ourselves to the document body
const tagName = "header-bar"

export class HeaderBar extends LitElement {

    constructor() {
        console.log("Inside constructor of HEADERBAR")
        super();
    }

    render() {
        const sidebarMenu = html`
        <div class="w3-bar w3-xlarge w3-indigo">
          <a href="#" class="w3-bar-item w3-button">SafeIsland</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 1</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 2</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 3</a>
          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-indigo w3-right w3-hide-large w3-hide-medium" @click=${this.toggleView}>&#9776;</a>
        </div>
        
        <div id="vertMenu" class="w3-bar-block w3-indigo w3-hide w3-hide-large w3-hide-medium">
          <a href="#" class="w3-bar-item w3-button">Link 1</a>
          <a href="#" class="w3-bar-item w3-button">Link 2</a>
          <a href="#" class="w3-bar-item w3-button">Link 3</a>
        </div>
        `
        return sidebarMenu;
    }

    toggleView() {
        var x = document.getElementById("vertMenu");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    createRenderRoot() {
        return this;
    }
    enter() {
        console.log("Enter page")
        this.requestUpdate();
    }
}

customElements.define(tagName, HeaderBar);

