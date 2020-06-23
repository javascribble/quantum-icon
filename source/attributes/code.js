import { query } from '../../references/quantum.js';

export const code = root => {
    const span = query(root, 'span');
    return value => span.innerHTML = `&${value};`;
};