import { Quantum, define } from '../../references/quantum.js';
import { code } from '../attributes/code.js';
import { offset } from '../attributes/offset.js';
import { icon } from '../templates/icon.js';

export class Icon extends Quantum {
    constructor() {
        super(icon);
    }

    static attributes = {
        code,
        offset
    };
}

define(Icon);