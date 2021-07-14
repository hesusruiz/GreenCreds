import { w3styles } from '../w3styles'

import { LitElement, css, html, render } from 'lit';
import { goHome } from "../router";

// Add ourselves to the document body
const tagName = "footer-scan"

export class FooterBar extends LitElement {

    static styles = [
        w3styles
    ];
    constructor() {
        console.log("Inside constructor of HEADERBAR")
        super();
    }

    render() {
        const sidebarMenu = html`
        <div class="w3-bar w3-xlarge w3-indigo">
          <div class="w3-bar-item" @click=${goHome}>SafeIsland</div>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 3</a>
          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-indigo w3-right w3-hide-large w3-hide-medium" @click=${this.toggleView}>&#9776;</a>
        </div>
        
        <div id="vertMenu" class="w3-bar-block w3-indigo w3-hide w3-hide-large w3-hide-medium">
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 3</a>
        </div>
        `
        return sidebarMenu;
    }

    toggleView(e) {
        var x = this.renderRoot.querySelector("#vertMenu");
        x.classList.toggle("w3-show")
    }

}

customElements.define(tagName, HeaderBar);

