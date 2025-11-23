interface DerivedBaseElement {
    styles: string
}

export abstract class BaseElement extends HTMLElement {
    
    static styles = String.raw`
        :host {
            display: block;
        }
    `
    constructor() {
        super()
        const sheet = new CSSStyleSheet()

        const derivedClass = this.constructor as unknown as DerivedBaseElement

        sheet.replaceSync(derivedClass.styles)
        const shadow = this.attachShadow({mode: "open"})
        shadow.adoptedStyleSheets.push(sheet)
    }
}
