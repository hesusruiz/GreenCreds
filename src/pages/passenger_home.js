
import { html, render } from 'lit';

export class PassengerHome {

    static styles = [
        this.styles,
        css`
        .plus {
            --t:3px;   /* Thickness */
            --l:60px;  /* size of the symbol */
            --s:55%;    /* Size of the plus inside */
            --c1:#fff; /* Plus color*/
            --c2: rgb(63, 81, 181); /* background color*/

            display:inline-block;
            width:var(--l);
            height:var(--l);
            
            background:
                linear-gradient(var(--c1),var(--c1)) content-box,
                linear-gradient(var(--c1),var(--c1)) content-box,
                var(--c2);
            background-position:center;
            background-size: var(--s) var(--t),var(--t) var(--s);
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
        super();
    }

    _render() {
        // Use the parent class to build the full page
        return html`
        <!-- =========================================== -->
        <!-- PASSENGER HOME                              -->
        <!-- =========================================== -->
        <div class="w3-container">
            <h2>You do not have any credentials yet</h2>
            <p>Click the button below to add credentials</p>
        </div>
        <div class="plus radius w3-card-4 fab"></div>
        `
    }
    enter() {
        console.log("Enter page DEMO")
        this.style.display = "block"
        this.requestUpdate();
    }

}

