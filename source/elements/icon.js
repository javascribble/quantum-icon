import html from '../templates/icon.js';

export class Icon extends quantum.Component {
    #icon;

    constructor() {
        super();

        this.#icon = this.shadowRoot.querySelector('span');
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['code', 'offset']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'code':
                this.#icon.innerHTML = `&${currentValue};`;
                break;
            case 'offset':
                this.#icon.style.top = currentValue;
                break;
        }
    }
}

quantum.define('quantum-icon', Icon);