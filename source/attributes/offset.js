import { querySelector } from '../../references/quantum.js';

export const offset = root => {
    const span = querySelector(root, 'span');
    return value => span.style.top = value;
};