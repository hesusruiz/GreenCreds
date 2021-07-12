import { LitElement, html, css } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      // The name to say "Hello" to.
      name: { type: String },

      // The number of times the button has been clicked.
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = {};
    this.count = 55;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}</h1>
      <slot></slot>
      <button @click=${this._onClick}>Click Count: ${this.count}</button>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-element", MyElement);
