import { Component, template } from '../../references/quantum.js';
import html from '../templates/icon.js';

export class Icon extends Component {
    #icon;

    constructor() {
        super();

        this.#icon = this.shadowRoot.querySelector('span');
    }

    static template = template(html);

    static attributes = ['code', 'offset'];

    codeChangedCallback(value) {
        this.#icon.innerHTML = `&${value};`;
    }

    offsetChangedCallback(value) {
        this.#icon.style.top = value;
    }
}

customElements.define('quantum-icon', Icon);