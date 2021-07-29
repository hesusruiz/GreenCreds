import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { goHome, gotoPage } from "../router";
import { T } from '../i18n/ii8';

export class Spinner extends AbstractPage {

    constructor(domElem) {
        console.log("SPINNER: inside constructor")
        super(domElem)
    }

    enter(pageData) {
        window.initialScreen()
        window.location.reload()
    }
}

