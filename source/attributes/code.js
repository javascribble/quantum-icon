import { query } from '../../references/quantum.js';

export const code = root => {
    const icon = query(root, '#icon');
    return value => icon.innerHTML = `&${value};`;
};