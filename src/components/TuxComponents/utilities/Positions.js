import { css } from 'styled-components';

// Adding ${FlexCenter}; will give you flex centered on both axis in row layout with no wrap,
// can change direction and wrap with variables as:: ${FlexCenter({dir:'column', wrap:'wrap'})};
export const FlexCenter = ({dir='row', wrap='no wrap'}) => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: ${dir};
        flex-wrap: ${wrap};
    `;
}

// Fully changeable Flex with mulitiple variables
// Change the variables you need, leave the rest out
export const Flex = ({jc='flex-start', ai='flex-start', fd='row', fw='no wrap'}) => {
    return css`
        display: flex;
        justify-content: ${jc};
        align-items: ${ai};
        flex-direction: ${fd};
        flex-wrap: ${fw};
    `;
}

