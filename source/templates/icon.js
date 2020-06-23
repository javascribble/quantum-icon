import { template } from '../../references/quantum.js';

const html = `
<span id="icon"></span>
`;

const css = `
:host {
    display: inline-block;
}

#icon {
    color: var(--icon-color, inherit);
    display: inline-block;
    position: relative;
    text-align: center;
    line-height: 1em;
    width: 1em;
}
`;

export const icon = template(html, css);