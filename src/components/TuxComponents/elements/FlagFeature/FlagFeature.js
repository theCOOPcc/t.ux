import styled, { css } from 'styled-components';
import { tux_orange, pop_bolder, tux_grey, answer_btn, hoverOption, selectO, tux_orangeption } from '../../utilities';

export const FeatureBox = styled.div`
   
`;

export const FlagBox = styled.div`
    display: flex;
    align-items: center;
    width: 94px;
    height: 37px;
    padding: 0;
    border: none;
    margin-left: 257px; /*TODO: replace this with proper margin when set in tux */
    &:hover {
        border: 1px solid ${tux_orange};
        border-bottom: none;
        border-radius: 5px 5px 5px 5px;
    }
    &:active {
        border: 1px solid ${tux_orange};
        /* border-bottom: none; */
        border-radius: 5px 5px 0px 0px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    ${props => props.hover && css`
        border: 1px solid ${tux_orange};
        /* border-bottom: none; */
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
    ${props => props.active && css`
        border: 1px solid ${tux_orange};
        border-bottom: none;
        border-radius: 5px 5px 0px 0px;
    `}

    img {
        width: 10.53px;
        height: 12.75px;
        margin-right: 13.64px;
        padding-left: 18px;
    }

`;

export const FlagText = styled.p`
    font: ${pop_bolder};
    font-size: 14px;
    color: ${tux_grey};
    line-height: 21px;
    
    &:hover {
        color: ${tux_orange};
    }
    &:active {
        color: ${tux_orange};
        border: none;

    }
    ${(props) => props.hover && css`
        color: ${tux_orange};
    `};
    ${(props) => props.active && css`
        color: ${tux_orange};
        border: none;
    `};
`;

export const SelectedMenu = styled.div`
    width: 351px;
    height: 290px;
    background: #fff;
    border: 1px solid ${tux_orange};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 0 5px 5px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    p {
        font: ${pop_bolder};
        font-size: 16px;
        color: #333333;
        padding-left: 20.5px;
        line-height: 20px;
    }
`;

export const Option = styled.button`
    background: #fff;
    width: 100%;
    height: 61px;
    font: ${answer_btn};
    color: #333333;
    border: none;
    text-align: left;
    margin: 0;
    padding-left: 20.5px;
    border-top: ${({type}) => (type === 'first') ? `9px solid ${tux_orange}` : 'none'};
    border-bottom: ${({type}) => (type === 'last') ? `none` : `1px solid ${tux_orange}`};
    &:hover {
        font-weight: 600;
        background-color: ${hoverOption};
    }
    &:active {
        font-weight: 600;
        background-color: ${selectOption};

    }
    ${props => props.hover && css`
        font-weight: 600;
        background-color: ${hoverOption};
    
    `}
    ${props => props.active && css`
        font-weight: 600;
        background-color: ${selectOption};
    
    `}
`;