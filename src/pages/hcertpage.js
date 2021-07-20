import { html, render as renderlit } from 'lit';
import { log } from '../log'
import { CWT } from "../components/cwt"
import eulogoUrl from "../img/eulogo.png"

var eulogo = `
data:image/png;base64,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`

var testQR = "HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355"

export class DisplayHcert {

    constructor() {
        console.log("Inside constructor of SCANRESULT")

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

    async enter(pageData, pageElement) {
        console.log("PRESENT Enter", pageData)
        this.qrContent = pageData.text
        // this.qrContent = testQR
        pageElement.style.display = "block"

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

        // this.requestUpdate()
        renderlit(this.thehtml, pageElement)

    }

    async exit() {
    }

    toggleView(elemSelector) {
        var x = document.querySelector(elemSelector);
        x.classList.toggle("w3-show")
    }

    renderDetail(cred) {
        // The credential
        let payload = cred[1];

        let thehtml = "Unrecognized";

        let msg = html`
            <div id="hcertFailed" class="w3-panel w3-red">
                <h3>Failed!</h3>
                <p>Signature validation failed. The certificate is not valid.</p>
            </div>
            `
        if (this.verified === "PRE") {
            msg = html`
            <div id="hcertWarning" class="w3-panel w3-yellow">
                <h3>Warning!</h3>
                <p>The certificate is correctly signed with a PRE key so it is not valid for travel.</p>
            </div>
            `
        } else if (this.verified === true) {
            msg = html`
            <div id="hcertValidated" class="w3-panel w3-green w3-border">
                <h3>Validated!</h3>
                <p>The certificate is valid.</p>
            </div>
            `
        }

        if (payload["certType"] == "v") {
            thehtml = html`

            <section class="section">
                <div class="subsection">
                    <img width="60px" src=${eulogo} alt="EUlogo">
                    <h3 style="display: inline-block">EU COVID CERTIFICATE</h3>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Vaccination</b></h4>
                </div>
            </section>

            ${msg}

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
                
                <section class="section">
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
                </section>
                
                <!-- <button @click=${()=> this.toggleView('#expandableSection')} class="w3-btn w3-block w3-black w3-left-align">Details</button> -->
            
                <!-- <div id="expandableSection" class="w3-hide"> -->

                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta mt-3">Disease targeted</div>
                            <div class="valor mt-3">${payload.diseaseTargeted}</div>
                        </div>
                    </section>

                    <section class="section">
                
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
                
                    </section>
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
                                
                <!-- </div> -->
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


