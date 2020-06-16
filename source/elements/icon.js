import { Quantum, define } from '../../references/quantum.js';
import { icon } from '../templates/icon.js';

export class Icon extends Quantum {
    constructor() {
        super(icon);
    }
}

define(Icon);