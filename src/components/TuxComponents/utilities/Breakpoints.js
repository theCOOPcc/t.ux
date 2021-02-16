import { css } from 'styled-components';

const size = {
    large: 1100,
    xLarge: 1500,
}

export const above = Object.keys(size).reduce((acc,label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
    return acc;
}, {})

console.log('above', above)
