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
    _viewerEl?: HTMLDivElement
    _viewer?: Viewer

    static observedAttributes = ["url"]
    attributeChangedCallback(name: string, oldValue: string, newValue:string) {
        if (name === "url")
            this.url = newValue
    }

    _url = ""
    get url() {
        return this._url
    }
    set url(value: string) {
        if (this.url !== value) {
            this._url = value
            this.render()
        }
    }

    connectedCallback() {
        const shadow = this.shadowRoot!

        const css = document.createElement("link")
        css.rel = "stylesheet"
        css.href = "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css"
        shadow.appendChild(css)

        this._viewerEl = document.createElement("div")
        this._viewerEl.id = "viewer"
        
        shadow.appendChild(this._viewerEl)
        // var urlSet = this.getAttribute("url")
        // if (urlSet)
        //     this.url = urlSet

        this.render()
    }

    render() {
        if (!this._viewerEl || !this.url)
            return

        if (this._viewer) {
            this._viewer.destroy()
        }
        this._viewer = new Viewer( {
            container: this._viewerEl,
            panorama: this._url,
            fisheye: false,
            minFov: 1
        })
    }
}
customElements.define("single-image", Single360)