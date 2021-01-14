import { Component, template, define } from '../import.js';
import html from '../templates/icon.js';

export class Icon extends Component {
    static template = template(html);

    static get observedAttributes() { return ['code', 'offset']; }

    codeAttributeChanged(attribute, previousValue, currentValue) {
        this.shadowRoot.querySelector('span').innerHTML = `&${currentValue};`;
    }

    offsetAttributeChanged(attribute, previousValue, currentValue) {
        this.shadowRoot.querySelector('span').style.top = currentValue;
    }
}

define('quantum-icon', Icon);