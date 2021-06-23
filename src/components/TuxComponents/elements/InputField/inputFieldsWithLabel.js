import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 43px;
  left: 15px;
  color: #e6211e;
  font: ${pop_reg};
  font-size: 10px;
  line-height: 15px;
`;

export const Error = styled.img`
  width: 24px;
  height: 24px;
  margin: 20px;
  border: none;
  ${(props) =>
    props.error &&
    css`
    position: absolute;
        margin-left: 240px;
        top: -5px;
      }
    `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  background: white;
  border: 1px solid #888888;
  border-radius: 10px;
  padding: 20px 0 0 12px;
  /* border-bottom: 1px solid #888888; */
  ${(props) =>
    props.focus &&
    css`
      caret-color: #366062;
      border: 1px solid #366062;
      transition: 0.3s ease all;
    `}
  ${(props) =>
    props.hover &&
    css`
      border: 1px solid #000000;
    `}
  ${(props) =>
    props.disabled &&
    css`
      /* background: rgba(240, 240, 240, 0.75); */
      border: 1px solid rgba(136, 136, 136, 0.5);
    `}
  ${(props) =>
    props.active &&
    css`
      border: 1px solid #444444;
      font: ${pop_reg};
      font-size: 14px;
      line-height: 21px;
      color: #565656;
    `}
    ${(props) =>
    props.error &&
    css`
      caret-color: #EA4A46;
      border: 1px solid #EA4A46;
    `}
`;

export const Label = styled.label`
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  color: #565656;
  position: absolute;
  pointer-events: none;
  margin-left: 12px;
  margin-bottom: 12px;
  left: 12px;
  top: 15px;
  transition: 0.3s ease all;

  //FOCUS
  ${(props) =>
    props.focus &&
    css`
      top: -8.5px;
      left: 5px;
      background-color: white;
      font-size: 10px;
      line-height: 15px;
      /* opacity: 0.6; */
      padding: 2px;
      color: #366062;
    `}
  //DISABLED
  ${(props) =>
    props.disabled &&
    css`
      line-height: 21px;
      color: rgba(136, 136, 136, 0.5);
    `}
    ${(props) =>
    props.hover &&
    css`
      color: #666666;
    `}
    //ACTIVE
  ${(props) =>
    props.active &&
    css`
      top: -7px;
      left: 5px;
      background-color: white;
      font-size: 10px;
      line-height: 15px;
      color: #222222;
    `}
    //ERROR
    ${(props) =>
    props.error &&
    css`
      top: -7px;
      left: 5px;
      background-color: white;
      font-size: 10px;
      line-height: 15px;
      color: #e6211e;
    `}
`;
