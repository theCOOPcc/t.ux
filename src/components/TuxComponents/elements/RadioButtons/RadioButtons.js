import React from 'react'
import styled, {css} from 'styled-components'

export const RadioButtonWrapper = styled.div`
  display: flex;
  /* position: absolute; */
  left: 42.47%;
  right: -2.74%;
  top: -10%;
  bottom: -10%;
  text-align: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  width: auto;
  margin: 0 10px;
  cursor: pointer;
  
  
    ${(props) =>
    props.focus &&
    css`
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      border: 3px solid #000000;
      box-sizing: border-box;
      border-radius: 5px;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #cccccc;
    `}

`


export const HiddenRadioButtonInput = styled.input`
  /* display: none; */
  opacity: 0;
  /* width: 0; */
`;


export const TestCustomRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20px;
  width: 20px;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 50%;
  /* margin: 5px; */
  cursor: pointer;

  ${(props) =>
    props.hover &&
    css`
      background: rgba(51, 51, 51, 0.5);
    `}

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #ee6e6b;
    `}

    ${(props) =>
    props.disabled &&
    css`
      border: 1px solid #cccccc;
    `}
  `