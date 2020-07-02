import { Quantum, define } from '../../references/quantum.js';
import { icon } from '../templates/icon.js';

export class Icon extends Quantum {
    constructor() {
        super(icon);
    }

    static attributes = {
        code: shadow => value => shadow.icon.innerHTML = `&${value};`,
        offset: shadow => value => shadow.icon.style.top = value
    };

    initializeShadowCallback(shadow) {
        shadow.icon = shadow.querySelector('span');
        super.initializeShadowCallback(shadow);
    }
}

define(Icon);