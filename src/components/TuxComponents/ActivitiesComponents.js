import styled, {css} from 'styled-components';

export const ProblemStatement = styled.h2`
    font: var(--pop-reg);
    font-size: 24px;
    line-height: 36px;
    text-align: left;
    margin: 60px ;

    ${props => props.Span && css`
        color: var(--tux-red);
        font-weight: 700;
    `}
`;
