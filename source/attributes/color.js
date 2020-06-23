import { query } from '../../references/quantum.js';

export const color = root => {
    const icon = query(root, '#icon');
    return value => icon.style.color = value;
};