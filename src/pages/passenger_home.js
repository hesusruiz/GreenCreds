
import { LitElement, css, html, render } from 'lit';
import { JrmPage } from "./jrmpage";

const tagName = "passenger-home"

export class PassengerHome extends JrmPage {

    static styles = [
        this.styles,
        css`
        .plus {
            --t:4px;   /* Thickness */
            --l:50px;  /* size of the symbol */
            --s:12px;  /* space around the symbol */
            --c1:#fff; /* Plus color*/
            --c2: rgb(63, 81, 181); /* background color*/

            display:inline-block;
            width:var(--l);
            height:var(--l);
            padding:var(--s);
            box-sizing:border-box; /*Remove this if you don't want space to be included in the size*/
            
            background:
                linear-gradient(var(--c1),var(--c1)) content-box,
                linear-gradient(var(--c1),var(--c1)) content-box,
                var(--c2);
            background-position:center;
            background-size: 100% var(--t),var(--t) 100%;
            background-repeat:no-repeat;
        }

        .radius {
            border-radius:50%;
        }
        .fab {
            position: fixed;
            bottom: 45px;
            right: 30px
        }
        `
    ];

    constructor() {
        console.log("Inside constructor of DEMO PAGE")
        super("passenger");
    }

    render() {
        // Use the parent class to build the full page
        return this.pageTemplate(
            html`
            <!-- =========================================== -->
            <!-- PASSENGER HOME                              -->
            <!-- =========================================== -->
            
            <h2>You still do not have any credentials</h2>
            <p>Click the button below to add credentials</p>

            <div class="plus radius w3-card-4 fab"></div>


            `
        )
    }
    enter() {
        console.log("Enter page DEMO")
        this.requestUpdate();
    }

}
customElements.define(tagName, PassengerHome);

