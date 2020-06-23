import { template } from '../../references/quantum.js';

const html = `
<span></span>
`;

const css = `
:host {
    display: inline-block;
}

span {
    color: var(--icon-color, inherit);
    line-height: var(--icon-size, normal);
    width: var(--icon-size, 1em);
    display: inline-block;
    position: relative;
    text-align: center;
}
`;

export const icon = template(html, css);