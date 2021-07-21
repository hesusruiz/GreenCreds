import { html, render } from 'lit';
import { gotoPage } from "../router-elem";

import { AbstractPage } from './abstractpage'
var testQR = "HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355"
var pageData = {
    text: testQR
}
var testQRBad = "HC1:NCFOXN%TSMAHNdHPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355"
var pageDataBad = {
    text: testQRBad
}

export class DemoPage extends AbstractPage {

    constructor(domElem) {
        console.log("DEMO: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("DEMO: enter page")

        let theHtml = html`
        <!-- =========================================== -->
        <!-- HOME PAGE for demos. It has several roles   -->
        <!-- and the user can choose                     -->
        <!-- =========================================== -->
        
        <div class=${this.styles.w3Container}>
            <a @click=${() => gotoPage("passenger")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("verifier")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>

            <a @click=${() => gotoPage("displayhcert", pageDataBad)}>
                <div class="w3-panel w3-card-4">
                    <h3>Display test QR</h3>
                    <p>Only for testing</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("issuerHome")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("pubcreds")}>
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a @click=${() => gotoPage("admin")}>
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
        </div>
        `

        this.render(theHtml)
    }

}

