import { Viewer } from "@photo-sphere-viewer/core"

export class Single360 extends HTMLElement {
    static styles = String.raw`
        :host {
            height: 95%;
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

    /**
     *
     */
    constructor() {
        super()
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(Single360.styles)
        const shadow = this.attachShadow({mode: "open"})
        shadow.adoptedStyleSheets.push(sheet)
    }
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
            panorama: 'IMG_20231012_015904_00_merged.jpg',
            fisheye: true,
            minFov: 1
        })
    }
}
customElements.define("single-image", Single360)