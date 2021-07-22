import {gotoPage} from "../router.js";
import {html} from "../_snowpack/pkg/lit-html.js";
import {log} from "../log.js";
import {BrowserMultiFormatReader, BarcodeFormat, NotFoundException} from "../_snowpack/pkg/@zxing/library.js";
import {AbstractPage} from "./abstractpage.js";
export class ScanQrPage extends AbstractPage {
  constructor(domElem) {
    console.log("SCANQR: Inside constructor");
    super(domElem);
    this.codeReader = new BrowserMultiFormatReader();
    this.videoInputDevices = [];
    this.selectedDeviceId = void 0;
    this.selectHtml = html``;
    this.resultObj = void 0;
    this.result = void 0;
    this.videoElem = void 0;
    this.self = this;
  }
  _render() {
    return html`
        <!-- =========================================== -->
        <!-- SCAN QR PAGE.                               -->
        <!-- =========================================== -->
                    
        <div id="videoPlaceholder">
        </div>
        
        <div id="footer" class="w3-bar w3-xlarge">
            ${this.videoInputDevices.length > 0 ? html`
                    ${this.getCamerasList()}
                    <button class="w3-btn w3-indigo w3-xlarge w3-hover-indigo" @click=${this.toggleView}>
                        Select Camera
                    </button>` : html``}
        </div>
        `;
  }
  toggleView(e) {
    var x = document.querySelector("#selectList");
    x.classList.toggle("w3-show");
  }
  getCamerasList() {
    let theHtml = html``;
    if (this.videoInputDevices.length > 0) {
      theHtml = html`
            <ul id="selectList" class="w3-ul w3-border w3-white w3-hide w3-large" >
                ${this.videoInputDevices.map((dev) => html`<li class=${dev.deviceId === this.selectedDeviceId ? "w3-large w3-pale-blue" : "w3-large"} id="${dev.deviceId}" @click=${() => this.selected(dev.deviceId)}>${dev.deviceId === this.selectedDeviceId ? html`*` : html``} ${dev.label}</li>`)}
            </ul>
            `;
    }
    return theHtml;
  }
  async enter() {
    console.log("SCANQR Enter", this.clientWidth);
    this.result = void 0;
    this.render(this._render());
    if (this.videoElem === void 0) {
      let constraints = {
        video: {
          facingMode: "environment"
        }
      };
      try {
        var stream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (e) {
        if (e instanceof NotAllowedError) {
          throw e;
        }
        if (e instanceof NotFoundError) {
          throw e;
        }
      }
      let streamDeviceId = stream.getVideoTracks()[0].getSettings().deviceId;
      this.selectedDeviceId = streamDeviceId;
      this.videoInputDevices = await this.codeReader.listVideoInputDevices();
      let placeHolder = document.querySelector("#videoPlaceholder");
      this.videoElem = document.createElement("video");
      this.videoElem.style.width = "100%";
      placeHolder.append(this.videoElem);
    }
    this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
      if (result) {
        console.log("RESULT", result);
        this.codeReader.reset();
        gotoPage("displayhcert", result.text);
      }
      if (err && !(err instanceof NotFoundException)) {
        console.error(err);
        this.result = err;
        this.requestUpdate();
      }
    });
    console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`);
    this.render(this._render());
  }
  selected(deviceId) {
    this.selectedDeviceId = deviceId;
    var x = document.querySelector("#selectList");
    x.classList.toggle("w3-show");
    this.codeReader.reset();
    this.codeReader.decodeFromVideoDevice(this.selectedDeviceId, this.videoElem, (result, err) => {
      if (result) {
        console.log("RESULT", result);
        this.codeReader.reset();
        gotoPage("displayhcert", result.text);
      }
      if (err && !(err instanceof NotFoundException)) {
        console.error(err);
        this.result = err;
        this.render(this._render());
      }
    });
    console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`);
    this.render(this._render());
  }
  async exit() {
    this.codeReader.reset();
  }
}
