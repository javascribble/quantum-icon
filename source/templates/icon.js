import { template } from '../../references/quantum.js';

const html = `
<span></span>
`;

const css = `
span {
    color: var(--icon-color, inherit);
    position: relative;
}
`;

export const icon = template(html, css);