import { template } from '../../references/quantum.js';

const html = `
<span></span>
`;

const css = `
span {
    font-size: var(--quantum-icon-font-size);
    position: relative;
}
`;

export const icon = template(html, css);