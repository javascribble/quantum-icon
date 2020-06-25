import { template } from '../../references/quantum.js';

const html = `
<span></span>
`;

const css = `
span {
    font-size: var(--quantum-icon-size);
    color: var(--quantum-icon-color);
    position: relative;
}
`;

export const icon = template(html, css);