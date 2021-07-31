import { AbstractPage } from './abstractpage'

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

