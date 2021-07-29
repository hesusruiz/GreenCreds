import {AbstractPage} from "./abstractpage.js";
import {html} from "../_snowpack/pkg/lit-html.js";
import {goHome, gotoPage} from "../router.js";
import {T} from "../i18n/ii8.js";
export class Spinner extends AbstractPage {
  constructor(domElem) {
    console.log("SPINNER: inside constructor");
    super(domElem);
  }
  enter(pageData) {
    window.initialScreen();
    window.location.reload();
  }
}
