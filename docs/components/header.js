import {html, render} from "../_snowpack/pkg/lit-html.js";
import {goHome as routerGoHome} from "../router.js";
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
  console.log("HEADERBAR: rendering the content");
  if (x) {
    x.classList.remove("w3-show");
  }
  let theHtml = html`
    <div class="w3-bar w3-xlarge w3-indigo">
        <div class="w3-bar-item" @click=${goHome}>SafeIsland</div>
        <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 1</a>
        <a href="#" class="w3-bar-item w3-button  w3-hide-small">Link 2</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small">Link 3</a>
        <a href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-indigo w3-right w3-hide-large w3-hide-medium" @click=${toggleMenu}>&#9776;</a>
    </div>
    
    <div class="w3-bar-block w3-indigo w3-hide w3-hide-large w3-hide-medium">
        <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 1</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 2</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 3</a>
    </div>
    `;
  render(theHtml, domElem);
}
