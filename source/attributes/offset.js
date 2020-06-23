import { query } from '../../references/quantum.js';

export const offset = root => {
    const icon = query(root, '#icon');
    return value => icon.style.top = value;
};