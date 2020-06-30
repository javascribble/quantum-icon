import { querySelector } from '../../references/quantum.js';

export const code = root => {
    const span = querySelector(root, 'span');
    return value => span.innerHTML = `&${value};`;
};