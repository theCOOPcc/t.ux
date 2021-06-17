import styled, { css } from 'styled-components';
import {
    complete,
    in_progress,
    text_white,
    not_started_hover
} from "../../utilities/Colors";


//Lozenge 
export const CompleteLozenge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 24px;
    radius: 3px;
    border-radius: 3px;
    background: ${complete};
    color: ${text_white};
    font: 700 14px "Poppins", sans-serif;
    align: center;
`;

//In Progress Lozenge
export const InProgress = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 125px;
height: 24px;
radius: 3px;
border-radius: 3px;
background: ${in_progress};
color: ${text_white};
font: 700 14px "Poppins", sans-serif;
align: center;
`


export const NotStarted = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
line-height: 125%;
width: 125px;
height: 24px;
radius: 3px;
border-radius: 3px;
color: ${not_started_hover};
font: 400 14px "Poppins", sans-serif;
align: center;
`

//Lozenge
export const Lozenge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 125%;
    width: 125px;
    height: 24px;
    radius: 3px;
    border-radius: 3px;
    font: 400 14px "Poppins", sans-serif;
    align: center;
    ${(props) =>
        props.complete &&
        css`
            background: ${complete};
            color: ${text_white};
            `}

    ${(props) =>
        props.progress &&
        css`
            background: ${in_progress};
            color: ${text_white};
            `}
    ${(props) => 
        props.notStarted &&
        css`
        color: ${not_started_hover};
        `}

`


