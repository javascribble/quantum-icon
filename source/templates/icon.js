import { template } from '../../references/quantum.js';

const html = `
<span></span>
`;

const css = `
span {
    font-size: var(--icon-size, inherit);
    color: var(--icon-color, inherit);
    position: relative;
}
`;

export const icon = template(html, css);