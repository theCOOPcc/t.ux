import { css } from 'styled-components';

export const FlexCenter = ({dir='row', wrap='no wrap'}) => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: ${dir};
        flex-wrap: ${wrap};
    `
}