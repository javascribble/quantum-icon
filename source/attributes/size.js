import { query } from '../../references/quantum.js';

export const size = root => {
    const icon = query(root, '#icon');
    return value => icon.style.fontSize = value;
};