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
        <a href="javascript:void(0)" class="w3-bar-item btn-menu w3-right" @click=${toggleMenu}>&#9776;</a>
    </div>
    
    <div class="w3-bar-block w3-xlarge color-white w3-hide">
        <a @click=${() => gotoPage("spinner")} href="javascript:void(0)" class="w3-bar-item btn-menu">${T("Update public keys")}</a>
        <a @click=${() => gotoPage("selectLanguage")} href="javascript:void(0)" class="w3-bar-item btn-menu">${T("Language")}</a>
        <a href="#" class="w3-bar-item btn-menu">${T("Privacy policy")}</a>
        <a href="#" class="w3-bar-item btn-menu">${T("Terms & Conditions")}</a>
    </div>
    `;
  render(theHtml, domElem);
}
