import { Quantum, define } from '../../references/quantum.js';
import { code } from '../attributes/code.js';
import { color } from '../attributes/color.js';
import { offset } from '../attributes/offset.js';
import { size } from '../attributes/size.js';
import { icon } from '../templates/icon.js';

export class Icon extends Quantum {
    constructor() {
        super(icon);
    }

    static attributes = {
        code,
        color,
        offset,
        size
    };
}

define(Icon);