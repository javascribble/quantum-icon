export const size = root => {
    const span = root.querySelector('span');
    return value => span.style.fontSize = value;
};