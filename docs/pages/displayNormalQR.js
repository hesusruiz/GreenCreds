import {AbstractPage} from "./abstractpage.js";
import {html} from "../_snowpack/pkg/lit-html.js";
import {goHome, gotoPage} from "../router.js";
export class displayNormalQR extends AbstractPage {
  constructor(domElem) {
    super(domElem);
  }
  enter(qrData) {
    let isURL = false;
    if (qrData.startsWith("https://") || qrData.startsWith("http://")) {
      isURL = true;
    }
    let theHtml = html`
        <div class="container" style="margin-top:50px;">
            <h2 class="w3-margin-bottom w3-center">Received QR</h2>
            <pre class="w3-large" style="word-break: break-all;">${qrData}</pre>
        
            <div class="w3-bar w3-padding-16 w3-center" style="max-width:70%;margin:50px auto;">

                <a href="javascript:void(0)" @click=${() => window.history.back()} class="w3-button w3-left color-primary hover-color-primary
                    w3-large">Back</a>
    
                ${isURL ? html`<a href="${qrData}" class="w3-button w3-right color-primary hover-color-primary
                    w3-large">Go to site</a>` : html``}
                
            </div>
        </div>
        `;
    this.render(theHtml);
  }
}
