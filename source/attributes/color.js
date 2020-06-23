import { query } from '../../references/quantum.js';

export const color = root => {
    const span = query(root, 'span');
    return value => span.style.color = value;
};