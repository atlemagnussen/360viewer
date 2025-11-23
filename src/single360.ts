import { Viewer } from "@photo-sphere-viewer/core"
import { BaseElement } from "./baseElement.js"

export class Single360 extends BaseElement {
    static styles = String.raw`
        :host {
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
        }
        div#viewer {
            width: 100%;
            height: 100%;
        }
    `
    _viewer?: Viewer

    connectedCallback() {
        const shadow = this.shadowRoot!

        const css = document.createElement("link")
        css.rel = "stylesheet"
        css.href = "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css"
        shadow.appendChild(css)

        const viewerEl = document.createElement("div")
        viewerEl.id = "viewer"
        
        shadow.appendChild(viewerEl)
        
        this._viewer = new Viewer( {
            container: viewerEl,
            panorama: 'jern5.jpg',
            fisheye: true,
            minFov: 1
        })
    }
}
customElements.define("single-image", Single360)