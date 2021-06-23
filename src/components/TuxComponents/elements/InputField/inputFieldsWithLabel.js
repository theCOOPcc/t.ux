import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";
import { tux_red, medium_grey, tux_primart, success_grey, dark_grey, text_black, white } from '../../utilities/Colors'


export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 43px;
  left: 15px;
  color: ${tux_red};
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
  border: 1px solid ${medium_grey};
  border-radius: 10px;
  padding: 20px 0 0 12px;
  ${(props) =>
    props.focus &&
    css`
      caret-color: ${tux_primart};
      border: 1px solid ${tux_primart};
      transition: 0.3s ease all;
    `}
  ${(props) =>
    props.hover &&
    css`
      border: 1px solid ${text_black};
    `}
  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${success_grey};
    `}
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${dark_grey};
      font: ${pop_reg};
      font-size: 14px;
      line-height: 21px;
      color: ${dark_grey};
    `}
    ${(props) =>
    props.error &&
    css`
      caret-color: ${tux_red};
      border: 1px solid ${tux_red};
    `}
`;

export const Label = styled.label`
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  color: ${medium_grey};
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
      background-color: ${white};
      font-size: 10px;
      line-height: 15px;
      padding: 2px;
      color: ${tux_primart};
    `}
  //DISABLED
  ${(props) =>
    props.disabled &&
    css`
      line-height: 21px;
      color: ${success_grey};
    `}
    ${(props) =>
    props.hover &&
    css`
      color: ${medium_grey};
    `}
    //ACTIVE
  ${(props) =>
    props.active &&
    css`
      top: -7px;
      left: 5px;
      background-color: ${white};
      font-size: 10px;
      line-height: 15px;
      color: ${dark_grey};
    `}
    //ERROR
    ${(props) =>
    props.error &&
    css`
      top: -7px;
      left: 5px;
      background-color: ${white};
      font-size: 10px;
      line-height: 15px;
      color: ${tux_red};
    `}
`;
