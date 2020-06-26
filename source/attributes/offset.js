export const offset = root => {
    const span = root.querySelector('span');
    return value => span.style.top = value;
};