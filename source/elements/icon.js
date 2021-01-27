import html from '../templates/icon.js';

const { Component, template, define } = quantum;

export class Icon extends Component {
    #icon;

    constructor() {
        super();

        this.#icon = this.shadowRoot.querySelector('span');
    }

    static template = template(html);

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

define('quantum-icon', Icon);