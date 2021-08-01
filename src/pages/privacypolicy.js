import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import legalpng from '../img/legal.png'


export class PrivacyPolicy extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {

        let theHtml = html`

<div class="sect-white" style="text-align:left">

<h1>Privacy Policy</h1>
<img src=${legalpng} alt="" style="width:20%" >

<h1>Privacy Policy</h1>
<p>
The user of the Website that contacts AXONTEAM, S.A. (referred as Axonteam) to issue a query through the system established on the Website, acknowledges that Axonteam will process the data in accordance with the privacy policy.
</p>
<p>
It is important to note that by sending a simple query email through the system established on the Website, the user and holder of the given data, necessary to attend the query, consents expressly the data process.
</p>

<p>
Therefore, Axonteam considers as personal data any information provided by the user while contacting with Axonteam via email. The user must provide truthful information about his/her personal data.
</p>

<p>
In the following, Axonteam provides the users of the Website the basic information of the data process (privacy policy).
</p>

<h3>1.- Identification:</h3>

<p>
AXONTEAM, SA (referred to as “Axonteam”), Calle Bruc, 59 - PR PTA 2, 08009 Barcelona, España. (legal@evidenceledger.eu). All rights reserved. Holder of the NIF (tax identification number) A-65580888 and registered in the Commercial Registry of Barcelona.
</p>

<h3>2.-Purpose</h3>

<p>
The purpose of the data process is to attend any query done by the user of the Website through the established system. There will not be any data processing of special categories.
</p>

<h3>3.-Legitimation</h3>

<p>
The legitimation of the data process is the express consent given by the user in the moment that emails Axonteam. Therefore, by sending the email, the user consents expressly that Axonteam process the personal data in accordance with the Privacy Policy.
</p>

<h3>4.-Recipients</h3>

<p>
There will not be any recipients of the provided personal data, and neither will be the data be transferred.
</p>

<h3>5.-Rights</h3>

<p>
At any moment the user will be able to modify his/her data and perform their rights of access, rectification or deletion of data, request that processing be restricted, oppose it or request data portability in accordance with the RGPD and the LOPD-GDD. For this purpose, the user will be able to contact by sending an email to the provided email of AXONTEAM’s data protection delegate.
</p>

<h3>6.-Duration of the process</h3>

<p>
The duration of the process will be the necessary to attend the different queries issued by the users of the Website and after resolving the query any data provided by the user will be delated.
</p>

<h3>7.-Additional Information</h3>

<p>
The data protection delegate of AXONTEAM S.A. is Accent Jurídic, S.L. and can be contacted directly by email at dpo@accentjuridic.com.
</p>

<p>
If there were a breach of security in the activities related to the data process, the internal procedure will be activated.
</p>
​​​​​​​
<p>
If the user would like to obtain more information of the Website’s Privacy Policy, he/she must direct the query to the data protection delegate of Axonteam by writing an email to
</p>
<a href="mailto:dpo@accentjuridic.com">dpo@accentjuridic.com</a>

</div>



`

        this.render(theHtml)
    }
}

