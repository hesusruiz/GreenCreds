import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import legalpng from '../img/legal.png'


export class TermsOfUse extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {

        let theHtml = html`

<div class="sect-white" style="text-align:left">

<h1>Terms of Use</h1>
<img src=${legalpng} alt="" style="width:20%" >

<h3>Identification:</h3>
<p>
    AXONTEAM, SA (referred to as “Axonteam”), Calle Bruc, 59 - PR PTA 2, 08009 Barcelona, España. (legal@evidenceledger.eu). All rights reserved. Holder of the NIF (tax identification number) A-65580888 and registered in the Commercial Registry of Barcelona.
</p>

<h3>Terms:</h3>
<p>
The access and use of the website “evidenceledger.eu” (referred to as “Website”) implies the express acceptance without reserves of all the terms and conditions included in the Terms of Use. These terms regulate the access and use of the Website, provided by Axonteam fully free.
</p>

<p>
Axonteam, at any moment and without the need of previous notice, has the capacity to: Interrupt the access to the Website and the Applications and of modifying the terms of use.
</p>

<p>
The user agrees to use the Website and its contents comping with the Law, the Terms of Use, morality, best practices, and the requirements of good faith and public order. The user agrees not to use the contents of the Website in any way that could damage the interests or rights of third parties or Axonteam.
</p>

<p>
The user will be the sole responsible of his/her use of the Website and its contents.
</p>

<h3>Disclaimer of liability:</h3>
<p>
Axonteam does not grant any sort of warranty, express or implied, with the Website or its contents. The software “Evidence Ledger” is provided AS IS and hereby disclaims all implied warranties, “Evidence Ledger” is under the Apache License, Version 2.0: <span style="word-break:break-word">“https://www.apache.org/licenses/LICENSE-2.0”</span>.
</p>

<p>
The user will use the Website and its contents under his/her responsibility and knows that Axonteam does not assume any responsibility, including but not limited to any of the following: (i) the presence of viruses or any other damaging component in the Website, its elements or in the server; (ii) the accuracy of the information in the Website; (iii) the functionality of the Website and its elements; (iv) the lack of availability or continued operability of the Website; (v) damages that may be caused or derived from the Website such as: interferences, informational or operational errors, interruptions, viruses or faults.
</p>

<h3>Intellectual and Industrial Property:</h3>
<p>
Axonteam has the exclusive intellectual property rights of the Website (such as the source code, design, navigation structures).
</p>

<p>
This Website may include references to brands or trademarks registered by Axonteam. The use of any brand or trademark without the express consent of Axonteam is forbidden. Any other brand or trademark belongs to the respective owner and their reference on the Website does not confer any right over them.
</p>

<h3>Data Protection:</h3>
<p>
For the simple use of the current Website, Axonteam will not store any personal data from the users, therefore it is expressly stated that there will not be any personal data processing for the simple use of the Website.
</p>
<p>
If the user of the Website contacts Axonteam there will be a data processing in accordance with the privacy policy included on the Website.
</p>

<p>
It is important to note that by sending a simple query email through the system established on the Website, the user and holder of the given data, necessary to attend the query, consents expressly the data process.
</p>

<h3>Applicable legislation and jurisdiction</h3>
<p>
Any dispute arising or related to the Webiste will be governed by the Spanish Law and, the parties waiver any other forum to which they may be entitled, and will submit to the jurisdiction of the courts of the city of Barcelona (Spain).
</p>

</div>



`

        this.render(theHtml)
    }
}

