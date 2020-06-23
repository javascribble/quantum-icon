import { query } from '../../references/quantum.js';

export const size = root => {
    const span = query(root, 'span');
    return value => span.style.fontSize = value;
};