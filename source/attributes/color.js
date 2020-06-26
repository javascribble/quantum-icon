export const color = root => {
    const span = root.querySelector('span');
    return value => span.style.color = value;
};