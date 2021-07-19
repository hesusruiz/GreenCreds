import { w3styles } from '../w3styles'
import { LitElement, css, html, render as renderlit } from 'lit';
import { log } from '../log'
import { CWT } from "../components/cwt"
import eulogoUrl from "../img/eulogo.png"


let tagName = "display-hcert"

var testQR = "HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355"

export class DisplayHcert extends LitElement {

    static styles = [
        w3styles,
        css`
        .container{padding:0.01em 16px}
        .section{padding:0.01em 16px;margin-top:0px;margin-bottom:16px;border:1px solid #ccc}
        .etiqueta{font-size:15px}
        .valor{font-size:15px;font-weight:600}
        `
    ];

    static get properties() {
        return {
            pepe: { attribute: true }
        };
    }

    constructor() {
        console.log("Inside constructor of SCANRESULT")
        super();

        this.thehtml = ""
        this.qrContent = ""
        this.hcert = undefined
        this.verified = false

    }

    render() {
        return html`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `
    }

    async enter(pageData) {
        console.log("PRESENT Enter", pageData)
        this.qrContent = pageData.text
        this.style.display = "block"

        // Decode credential verifying it at the same time
        try {
            this.hcert = await CWT.decodeHC1QR(this.qrContent, true);
            this.verified = this.hcert[3]
        } catch (error) {
            log.myerror("Error verifying credential", error)
            return;
        }

        try {
            // Render the credential
            this.thehtml = this.renderDetail(this.hcert);
        } catch (error) {
            log.myerror("Error rendering credential", error)
            return;
        }

        this.requestUpdate()

    }

    async exit() {
    }

    toggleView(elemSelector) {
        var x = this.renderRoot.querySelector(elemSelector);
        x.classList.toggle("w3-show")
    }

    renderDetail(cred) {
        // The credential
        let payload = cred[1];
    
        let thehtml = "Unrecognized";
    
        if (payload["certType"] == "v") {
            thehtml = html`

            <section class="section">
                <div class="subsection">
                    <img class="" width="60px" src=${eulogoUrl} alt="EUlogo">
                    <h4 style="display: inline-block"><b>EU COVID CERTIFICATE</b></h4>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Vaccination</b></h4>
                </div>
            </section>
            
            <div class="container">
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">Name</div>
                        <div class="valor">${payload.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Date of birth</div>
                        <div class="valor">${payload.dateOfBirth}</div>
                    </div>
                </section>
                
                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">Dose number/Total doses</div>
                        <div class="valor">${payload.doseNumber}/${payload.doseTotal}</div>
                    </div>
        
                    <div class="subsection">
                        <div class="etiqueta">Date of vaccination</div>
                        <div class="valor">${payload.dateVaccination}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Member State of vaccination</div>
                        <div class="valor">${payload.country}</div>
                    </div>
                </div>
                
                <button @click=${()=>this.toggleView("#expandableSection")} class="w3-btn w3-block w3-black w3-left-align">Details</button>
            
                <section id="expandableSection" class="w3-hide">

                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta mt-3">Disease targeted</div>
                            <div class="valor mt-3">${payload.diseaseTargeted}</div>
                        </div>
                    </section>

                    <div class="section">
                
                        <div class="subsection">
                            <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                            <div class="valor mb-3">${payload.vaccineProphylaxis}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Vaccine medicinal product</div>
                            <div class="valor mb-3">${payload.medicinalProduct}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Manufacturer</div>
                            <div class="valor">${payload.manufacturer}</div>            
                        </div>
                
                    </div>
                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta">Certificate identifier</div>
                            <div class="valor text-break">${payload.uniqueIdentifier}</div>
                        </div>
                        <div class="subsection">
                            <div class="etiqueta">Certificate issuer</div>
                            <div class="valor">${payload.certificateIssuer}</div>                
                        </div>
                    </section>
                                
                </section>
            </div>
            `;
        }
    
        if (payload["certType"] == "t") {
            thehtml = html`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Test</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${payload.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${payload.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Test details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${payload.certificateIssuer}</div>
                    </div>
            
                </div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Name</div>
                        <div class="valor mb-3">${payload.typeTest}</div>
            
                        <div class="etiqueta">Manufacturer</div>
                        <div class="valor">${payload.manufacturer}</div>
            
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Result</div>
                        <div class="valor mb-3">${payload.testResult}</div>
            
                        <div class="etiqueta">Date/Time of Sample Collection</div>
                        <div class="valor mb-3">${payload.timeSample}</div>
            
                        <div class="etiqueta">Testing Centre</div>
                        <div class="valor">${payload.testingCentre}</div>
                    </div>
                </div>
            
            </div>
            `;
        }
    
        if (payload["certType"] == "r") {
            thehtml = html`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Recovery</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${payload.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${payload.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Recovery details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Date of positive</div>
                        <div class="valor mb-3">${payload.datePositive}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid from</div>
                        <div class="valor mb-3">${payload.dateFrom}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid to</div>
                        <div class="valor">${payload.dateUntil}</div>
                    </div>
            
                </div>
            
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>
            
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
customElements.define(tagName, DisplayHcert);


