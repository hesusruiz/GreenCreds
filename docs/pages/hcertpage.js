import {html, render} from "../_snowpack/pkg/lit-html.js";
import {log} from "../log.js";
import {CWT} from "../components/cwt.js";
import {AbstractPage} from "./abstractpage.js";
import {T} from "../i18n/ii8.js";
import {gotoPage} from "../router.js";
export class DisplayHcert extends AbstractPage {
  constructor(domElem) {
    console.log("HCERT: Constructor");
    super(domElem);
  }
  async enter(qrContent) {
    console.log("PRESENT Enter", qrContent);
    let hcert = void 0;
    let verified = false;
    let thehtml = "";
    try {
      hcert = await CWT.decodeHC1QR(qrContent, true);
      verified = hcert[3];
    } catch (error) {
      log.myerror("Error verifying credential", error);
      this.render(this.renderGeneralError(error));
      return;
    }
    try {
      thehtml = this.renderDetail(hcert, verified);
    } catch (error) {
      log.myerror("Error rendering credential", error);
      this.render(this.renderGeneralError(error));
      return;
    }
    let fullPage = html`
        ${thehtml}
        <div class="sect-white">
            <button @click=${() => gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
            w3-xlarge w3-round-xlarge">
            ${T("Verify another")}</button>
        </div>
        `;
    this.render(fullPage);
  }
  renderGeneralError(error) {
    return html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `;
  }
  renderDetail(cred, verified) {
    let payload = cred[1];
    let thehtml = "Unrecognized";
    let msg = html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>${T("Failed!")}</h3>
                <p>${T("Signature validation failed. The certificate is not valid.")}</p>
            </div>
            `;
    if (verified === "PRE") {
      msg = html`
            <div id="hcertWarning" class="w3-panel bkg-warning">
                <h3>${T("Warning!")}</h3>
                <p>${T("The certificate is correctly signed with a PRE key so it is not valid for travel.")}</p>
            </div>
            `;
    } else if (verified === true) {
      msg = html`
            <div id="hcertValidated" class="w3-panel bkg-success w3-border">
                <h3>${T("Validated!")}</h3>
                <p>${T("The certificate is valid.")}</p>
            </div>
            `;
    }
    if (payload["certType"] == "v") {
      thehtml = html`

            <section class="section">
                <div class="subsection">
                    <h3 class="w3-center">EU COVID CERTIFICATE</h3>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Vaccination</b></h4>
                </div>
            </section>

            ${msg}

            <div class="container">
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">${T("Name")}</div>
                        <div class="valor">${payload.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Date of birth")}</div>
                        <div class="valor">${payload.dateOfBirth}</div>
                    </div>
                </section>
                
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">${T("Dose number/Total doses")}</div>
                        <div class="valor">${payload.doseNumber}/${payload.doseTotal}</div>
                    </div>
        
                    <div class="subsection">
                        <div class="etiqueta">${T("Date of vaccination")}</div>
                        <div class="valor">${payload.dateVaccination}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Member State of vaccination")}</div>
                        <div class="valor">${payload.country}</div>
                    </div>
                </section>
                
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta mt-3">${T("Disease targeted")}</div>
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                    </div>
                </section>

                <section class="section">
            
                    <div class="subsection">
                        <div class="etiqueta mt-3">${T("Vaccine/profilaxis targeted")}</div>
                        <div class="valor mb-3">${payload.vaccineProphylaxis}</div>
                    </div>
            
                    <div class="subsection">
                        <div class="etiqueta">${T("Vaccine medicinal product")}</div>
                        <div class="valor mb-3">${payload.medicinalProduct}</div>
                    </div>
            
                    <div class="subsection">
                        <div class="etiqueta">${T("Manufacturer")}</div>
                        <div class="valor">${payload.manufacturer}</div>            
                    </div>
            
                </section>
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">${T("Certificate identifier")}</div>
                        <div class="valor" style="word-break: break-all;">${payload.uniqueIdentifier}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Certificate issuer")}</div>
                        <div class="valor">${payload.certificateIssuer}</div>                
                    </div>
                </section>
                                
            </div>
            `;
    }
    if (payload["certType"] == "t") {
      thehtml = html`

            <section class="section">
                <div class="subsection">
                    <h3 class="w3-center">EU COVID CERTIFICATE</h3>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Test</b></h4>
                </div>
            </section>

            ${msg}

            <div class="container">
                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">${T("Name")}</div>
                        <div class="valor">${payload.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Date of birth")}</div>
                        <div class="valor">${payload.dateOfBirth}</div>
                    </div>
                </div>
                
                <div class="section">
                
                    <div class="subsection">
                
                        <div class="etiqueta mt-3">${T("Test Name")}</div>
                        <div class="valor mb-3">${payload.typeTest}</div>

                        <div class="etiqueta mt-3">${T("Test Result")}</div>
                        <div class="valor mb-3">${payload.testResult}</div>
            
                        <div class="etiqueta">${T("Date/Time of Sample Collection")}</div>
                        <div class="valor mb-3">${payload.timeSample}</div>
            
                    </div>
                
                </div>
                
                <section class="section">
                        <div class="subsection">
                            <div class="etiqueta mt-3">${T("Disease targeted")}</div>
                            <div class="valor mt-3">${payload.diseaseTargeted}</div>
                        </div>
                    </section>

                <div class="section">
                
                    <div class="subsection">
            
                        <div class="etiqueta">${T("Manufacturer")}</div>
                        <div class="valor">${payload.manufacturer}</div>
            
                        <div class="etiqueta">${T("Testing Centre")}</div>
                        <div class="valor">${payload.testingCentre}</div>
                    </div>
                
                </div>


                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta mt-3">${T("Certificate identifier")}</div>
                        <div class="valor" style="word-break: break-all;">${payload.uniqueIdentifier}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Certificate issuer")}</div>
                        <div class="valor">${payload.certificateIssuer}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Country")}</div>
                        <div class="valor">${payload.country}</div>
                    </div>

                </div>
                
            </div>
            `;
    }
    if (payload["certType"] == "r") {
      thehtml = html`

            <section class="section">
                <div class="subsection">
                    <h3 class="w3-center">EU COVID CERTIFICATE</h3>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Recovery</b></h4>
                </div>
            </section>

            ${msg}

            <div class="container">
                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">Name</div>
                        <div class="valor">${payload.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Date of birth</div>
                        <div class="valor">${payload.dateOfBirth}</div>
                    </div>
                </div>
           
                <div class="section">
            
                    <div class="subsection">
                        <div class="etiqueta">Date of positive</div>
                        <div class="valor">${payload.datePositive}</div>
                    </div>
            
                    <div class="subsection">
                        <div class="etiqueta">Valid from</div>
                        <div class="valor">${payload.dateFrom}</div>
                    </div>
            
                    <div class="subsection">
                        <div class="etiqueta mt-3">Valid to</div>
                        <div class="valor">${payload.dateUntil}</div>
                    </div>
            
                </div>
            
                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta mt-3">Disease targeted</div>
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">Certificate identifier</div>
                        <div class="valor" style="word-break: break-all;"><strong>${payload.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${payload.certificateIssuer}</div>
            
                        <div class="etiqueta">Country of Test</div>
                        <div class="valor">${payload.country}</div>
            
                    </div>
            
                </div>
            </div>
            `;
    }
    return thehtml;
  }
}
