import {html, render} from "../_snowpack/pkg/lit-html.js";
import {goHome as routerGoHome, gotoPage} from "../router.js";
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
        <div class="w3-bar-item" @click=${goHome}>EU COVID Credentials</div>
        <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 1</a>
        <a href="#" class="w3-bar-item w3-button  w3-hide-small">Link 2</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 3</a>
        <a href="javascript:void(0)" class="w3-bar-item w3-button hover-color-primary w3-right w3-hide-large w3-hide-medium" @click=${toggleMenu}>&#9776;</a>
    </div>
    
    <div class="w3-bar-block color-primary w3-hide w3-hide-large w3-hide-medium">
        <a @click=${() => gotoPage("spinner")} href="javascript:void(0)" class="w3-bar-item w3-button hover-color-primary">Update public keys</a>
        <a href="#" class="w3-bar-item w3-button hover-color-primary">Privacy policy</a>
        <a href="#" class="w3-bar-item w3-button hover-color-primary">Help</a>
    </div>
    `;
  render(theHtml, domElem);
}
