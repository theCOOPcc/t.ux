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

export const Hint = styled.div`
    height: 65px;
    width: 100px;
    background-color: ${(props) => (props.isCorrect ? 'Green' : 'Red')};
    color: var(--true-white);
    font: var(--pop-bolder);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0 65px;
    /* flex-grow: 3; */

`;

export const Feedback = styled.p`
    font: var(--pop-reg);
    flex-shrink: 3;
    text-align: left;
`;

export const Tips = styled.p`
    font: var(--pop-bolder);
    margin: 0;
    padding: 25px;
    text-align: left;
`;