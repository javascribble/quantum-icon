import { Component, template, define } from '../import.js';
import html from '../templates/icon.js';

export class Icon extends Component {
    #icon;

    constructor() {
        super();

        this.#icon = this.shadowRoot.querySelector('span');
    }

    static template = template(html);

    static get observedAttributes() { return ['code', 'offset']; }

    codeAttributeChanged(attribute, previousValue, currentValue) {
        this.#icon.innerHTML = `&${currentValue};`;
    }

    offsetAttributeChanged(attribute, previousValue, currentValue) {
        this.#icon.style.top = currentValue;
    }
}

define('quantum-icon', Icon);