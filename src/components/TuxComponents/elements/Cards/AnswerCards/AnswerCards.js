import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, pop_semiBold, pop_thick, success, tux_red } from '../../../utilities';

export const AnswerCardBox = styled.div`
    width: 240px;
    height: 250px;
    border-radius: 10px;
    margin: 5px 7px;
    position: relative;
    border: 1px solid rgba(187, 187, 187, 1);
    ${props => props.incorrect && css`
        border: 1px solid ${tux_red};
    `}
    
    img {
        width: 212px;
        height: 170px;
        border-radius: 10px;
        position: absolute;
        top: 12px;
        left: 14px;
    }
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.75);
    position: absolute;
    top: 195px;
    left: 11.53px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.correct && css`
        background: ${success};
    `}
    ${props => props.incorrect && css`
        background: ${tux_red};
    `}
    ${props => props.hover && css`
        background: #3D3D3D;
    `}

`;

export const IconText = styled.p`
    font: ${pop_semiBold};
    color: rgba(255,255,255,1);
`;

export const CardText = styled.p`
    font: ${pop_thick};
    line-height: 27px;
    color: black;
    position: absolute;
    top: 185px;
    left: 61.53px;
`;

export const FourAnswerCardGroup = styled.div`
    ${Flex};
    flex-flow: row wrap;
    max-width: 600px;
    margin-bottom: 25px;
`;
