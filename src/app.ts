import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, query } from "lit/decorators.js";


import { Viewer } from '@photo-sphere-viewer/core';

@customElement("main-app")
export class App extends LitElement {
    // static styles = css`
    //     :host {
    //         height: 95%;
    //         max-height: 100%;
    //         width: 100%;
    //         max-width: 100%;
    //     }
    //     div#viewer {
    //         width: 100%;
    //         height: 100%;
    //     }
    // `
    _viewer?: Viewer

    @query("#viewer")
    viewerEl?: HTMLDivElement

    protected firstUpdated(_changedProperties: PropertyValues) {
        if (this.viewerEl) {
            this._viewer = new Viewer({
                container: this.viewerEl,
                panorama: 'IMG_20231008_120641_00_003.jpg',
                fisheye: true
            })
        }
    }
    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this
    }
    render() {
        return html`
            <div id="viewer"></div>
        `
    }
}