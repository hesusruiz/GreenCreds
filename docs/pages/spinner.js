import {AbstractPage} from "./abstractpage.js";
import {html} from "../_snowpack/pkg/lit-html.js";
import {goHome, gotoPage} from "../router.js";
export class Spinner extends AbstractPage {
  constructor(domElem) {
    console.log("SPINNER: inside constructor");
    super(domElem);
  }
  enter(pageData) {
    console.log("SPINNER: enter page");
    let theHtml = html`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <div class="loaderpage" style="text-align: center;">
                    <h2>Loading</h2>
                    <p>Please wait...</p>
                    <div class="loader"></div>
                </div>
        
            </div>
        </div>
        `;
    this.render(theHtml);
    window.location.reload();
  }
}
