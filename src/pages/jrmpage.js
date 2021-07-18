import { route } from "../router-elem";
import { w3styles } from '../w3styles'

import { LitElement, css, html, render } from 'lit';
import '../components/header'


export class JrmPage extends LitElement {

    static styles = [
        w3styles
    ];

    constructor() {
        console.log("Inside constructor of JRMPAGE")
        super();
    }

    enter() {
        console.log("Enter JRMPAGE")
        this.style.display = "block"
        this.requestUpdate();
    }
}
