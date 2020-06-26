export const code = root => {
    const span = root.querySelector('span');
    return value => span.innerHTML = `&${value};`;
};