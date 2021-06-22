import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: #888888;
  top: 43px;
  left: 15px;
  font: ${pop_reg};
  font-size: 10px;
  line-height: 15px;
  ${(props) =>
    props.error &&
    css`
      color: #e6211e;
    `}
  ${(props) =>
    props.focus &&
    css`
      color: #54989b;
    `}
    ${(props) =>
    props.disabled &&
    css`
      color: rgba(136, 136, 136, 0.5);
    `}
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
    `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  background: #f0f0f0;
  border-radius: 10px 10px 0px 0px;
  padding: 12px;
  border: none;
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
      font-family: ${pop_reg};
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
