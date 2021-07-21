import allstyles from '../css/w3full.module.css'
import { html, render } from 'lit';
import { HeaderBar } from '../components/header'

export class AbstractPage {

    styles = allstyles;

    constructor(id) {
        if (this.tagName === undefined) {
            this.tagName = "div"
        }
        this.domElem = document.createElement(this.tagName)
        if (id) { this.domElem.id = id }
        this.domElem.style.display = "none"
    }

    render(theHtml) {
        this.domElem.style.display = "block"
        HeaderBar()
        render(theHtml, this.domElem)
    }
}
