export class Icon extends Quantum {
    #icon = this.shadowRoot.querySelector('span');

    constructor() {
        super();
    }

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