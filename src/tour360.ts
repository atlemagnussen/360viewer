import { Viewer } from "@photo-sphere-viewer/core"
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin"

export class Tour360 extends HTMLElement {
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
        sheet.replaceSync(Tour360.styles)
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
            plugins: [
                VirtualTourPlugin.withConfig({
                    nodes: [
                        { id: "node-1", panorama: "livingroom1.jpg", links: [
                            { nodeId: "node-2", position: { textureX: 1500, textureY: 780 } }
                        ] },
                        { id: "node-2", panorama: "livingroom2.jpg", links: [
                            { nodeId: "node-1", position: { textureX: 3000, textureY: 780 } }
                        ] },
                    ],
                    startNodeId: "node-1"
                })
            ]
        })
    }
}
customElements.define("tour-app", Tour360)