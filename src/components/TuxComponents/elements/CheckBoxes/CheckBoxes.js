import styled, { css } from "styled-components";


export const CheckboxWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  margin: 0 10px;
  cursor: pointer;
  
  ${(props) =>
    props.focus &&
    css`
      border: 3px solid #000000;
      box-sizing: border-box;
      border-radius: 5px;
      /* For the distance between label and border */
      /* padding-right: 5px; */
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #cccccc;
    `}
`;

export const HiddenCheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  margin: 0;
  padding: 0;
`;

export const HiddenToggleInput = styled.input`
  opacity: 0;
  width: 0;
  margin: 0;
  padding: 0;
`;

export const ToggleBall = styled.div`
  position: absolute;
  left: 5px;
  border-radius: 50%;
  background: white;
  width: 17px;
  height: 17px;
  &:checked {
    right:5px;
  }
`

export const TestCustomToggle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25px;
  width: 60px;
  background: red;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 38px;
  margin: 4px;
  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      &::before {
        content: "";
        display: inline-block;
        outline: none;
        border: none;
      }

      &::after {
        content: "";
        height: 25px;
        width: 60px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 38px;
        background: green;
        background-position: center;
      }
    `}
`;


export const TestCustomCheckbox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20px;
  width: 20px;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 4px;
  cursor: pointer;
  /* Fixes spacing between label text and the checkbox */
  /* margin-right: 10px; */
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

  ${(props) =>
    props.intermediate &&
    css`
      &::before {
        content: "";
        display: inline-block;
        outline: none;
        border: none;
      }
      &::after {
        content: "";
        height: 20px;
        width: 20px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid;
        border-radius: 5px;
        background-image: url("/images/intermediate-symbol.svg");
        background-position: center;
      }
    `}


${(props) =>
    props.checked &&
    css`
      &::before {
        content: "";
        display: inline-block;
        outline: none;
        border: none;
      }

      &::after {
        content: "";
        height: 20px;
        width: 20px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid;
        border-radius: 5px;
        background-image: url("/images/Good-Check.svg");
        background-position: center;
      }
    `}
`;
