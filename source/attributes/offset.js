import { query } from '../../references/quantum.js';

export const offset = root => {
    const span = query(root, 'span');
    return value => span.style.top = value;
};