import {html, render} from "../_snowpack/pkg/lit-html.js";
import {HeaderBar} from "../components/header.js";
export class AbstractPage {
  constructor(id) {
    if (this.tagName === void 0) {
      this.tagName = "div";
    }
    this.domElem = document.createElement(this.tagName);
    if (id) {
      this.domElem.id = id;
    }
    this.domElem.style.display = "none";
  }
  render(theHtml) {
    this.domElem.style.display = "block";
    HeaderBar();
    render(theHtml, this.domElem);
  }
}
