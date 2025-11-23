import { css, html, LitElement } from "lit"
import { property, state } from "lit/decorators.js"


export class Album360 extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
        }
        * {
            box-sizing: border-box;
        }
        nav {
            padding: 0.5rem;
            flex-basis: 10%;
            flex-grow: 0;
            flex-shrink: 0
        }
        section {
            flex-basis: 90%;
            flex-grow: 1;
            flex-shrink: 1
        }
        div {
            cursor: pointer;
        }
    `

    @property({attribute: false})
    album: Array<string> = ["jern1.jpg", "jern2.jpg", "jern3.jpg", "jern4.jpg", "jern5.jpg"]

    @state()
    selectedImg = "jern1.jpg"

    select(image: string) {
        this.selectedImg = image
    }
    render() {
        return html`
            <nav>
                ${this.album.map(i => {
                    return html`<div @click=${(e: Event) => this.select(i)}>${i}</div>`
                })}
            </nav>
            <section>
                <single-image url="${this.selectedImg}"></single-image>
            </section>
        `
    }
}
customElements.define("album-image", Album360)