import styled, { css } from "styled-components";
import React from "react";

export const Label = styled.label`
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
`;

// export const FieldSet = styled.fieldset`
//     display: flex;
//     border: none;
//     align-items:center;
// `

export const HiddenCheckboxInput = styled.input`
  display: none;
`;

export const CustomCheckboxInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  ${(props) =>
    props.hover &&
    css`
      background: rgba(51, 51, 51, 0.5);
    `}
  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid #cccccc;
    `}

  ${(props) =>
    props.error &&
    css`
     border: 1px solid #EE6E6B;
    `}

    ${props => props.checked && css`
      /* background-color: #C4C4C4 */
      background-image: url('/images/Good-Check.svg');
      background-position: center;
    `}
`;
