import {html, render} from "../_snowpack/pkg/lit-html.js";
import {goHome as routerGoHome, gotoPage} from "../router.js";
import {T} from "../i18n/ii8.js";
var domElem = void 0;
var x = void 0;
export function HeaderBar() {
  function toggleMenu(e) {
    x = e.target.parentNode.nextElementSibling;
    x.classList.toggle("w3-show");
  }
  function goHome(e) {
    x = e.target.parentNode.nextElementSibling;
    x.classList.remove("w3-show");
    routerGoHome();
  }
  if (!domElem) {
    console.log("HEADERBAR: Creating DOM element");
    domElem = document.createElement("div");
    domElem.id = "headerbar";
    document.body.append(domElem);
  }
  if (x) {
    x.classList.remove("w3-show");
  }
  let theHtml = html`
    <div class="w3-bar w3-xlarge color-primary">
        <img class="w3-bar-item" style="padding:0" @click=${goHome} href="javascript:void(0)" src="img/evidenceLogo60.png" alt="">
        <a href="#" class="w3-bar-item w3-button w3-hide-small">${T("Privacy policy")}</a>
        <a href="#" class="w3-bar-item w3-button  w3-hide-small">${T("Terms & Conditions")}</a>
        <a href="javascript:void(0)" class="w3-bar-item w3-button hover-color-primary w3-right w3-hide-large w3-hide-medium" @click=${toggleMenu}>&#9776;</a>
    </div>
    
    <div class="w3-bar-block color-primary w3-hide w3-hide-large w3-hide-medium">
        <a @click=${() => gotoPage("spinner")} href="javascript:void(0)" class="w3-bar-item w3-button hover-color-primary">${T("Update public keys")}</a>
        <a @click=${() => gotoPage("selectLanguage")} href="javascript:void(0)" class="w3-bar-item w3-button hover-color-primary">${T("Language")}</a>
        <a href="#" class="w3-bar-item w3-button hover-color-primary">${T("Privacy policy")}</a>
        <a href="#" class="w3-bar-item w3-button hover-color-primary">${T("Terms & Conditions")}</a>
    </div>
    `;
  render(theHtml, domElem);
}
