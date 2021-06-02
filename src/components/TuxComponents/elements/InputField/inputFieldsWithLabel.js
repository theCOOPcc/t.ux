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
  background: #f0f0f0;
  border: none;
  border-radius: 10px 10px 0px 0px;
  padding: 20px 0 0 12px;
  border-bottom: 1px solid #888888;
  ${(props) =>
    props.focus &&
    css`
      caret-color: #54989b;
      border: none;
      border-bottom: 2px solid #54989b;
      transition: 0.3s ease all;
    `}
  ${(props) =>
    props.hover &&
    css`
      background: rgba(136, 136, 136, 0.25);
      border: none;
      border-bottom: 1px solid #888888;
    `}
  ${(props) =>
    props.disabled &&
    css`
      background: rgba(240, 240, 240, 0.75);
      border: none;
      border-bottom: 1px solid rgba(136, 136, 136, 0.5);
    `}
  ${(props) =>
    props.active &&
    css`
      border: none;
      border-bottom: 2px solid #222222;
      font: ${pop_reg};
      font-size: 14px;
      line-height: 21px;
      color: #565656;
    `}
    ${(props) =>
    props.error &&
    css`
      caret-color: #e6211e;
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
  left: 15px;
  top: 20px;
  transition: 0.3s ease all;

  //FOCUS
  ${(props) =>
    props.focus &&
    css`
      top: 6px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      opacity: 0.6;
      color: #54989b;
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
      color: #222222;
    `}
    //ACTIVE
  ${(props) =>
    props.active &&
    css`
      top: 6px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      opacity: 0.6;
      color: #222222;
    `}
    //ERROR
    ${(props) =>
    props.error &&
    css`
      top: 6px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      color: #e6211e;
    `}
`;
