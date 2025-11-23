import { BaseElement } from "./baseElement.js"

export class Album360 extends BaseElement {
    static styles = String.raw`
        :host {
            display: flex;
            flex-direction: row;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
        }
        nav {
            flex-basis: 20%;
            flex-grow: 0;
            flex-shrink: 0
        }
        section {
            flex-basis: 80%;
            flex-grow: 1;
            flex-shrink: 1
        }
    `

    connectedCallback() {
        const shadow = this.shadowRoot!

        const navEl = document.createElement("nav")
        shadow.appendChild(navEl)
        
        const sectionEl = document.createElement("section")
        shadow.appendChild(sectionEl)
        sectionEl.innerHTML = `<p>Hello world</p>`
    }
}
customElements.define("album-image", Album360)