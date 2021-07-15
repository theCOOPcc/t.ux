import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";
import {tux_red, tux_primart, success_grey, dark_grey, grey_text, text_black, true_white } from '../../utilities/Colors'

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${grey_text};
  top: 43px;
  left: 15px;
  font: ${pop_reg};
  font-size: 10px;
  line-height: 15px;
  ${(props) =>
    props.hover &&
    css`
      color: ${grey_text};
    `}
  ${(props) =>
    props.error &&
    css`
      color: ${tux_red};
    `}
  ${(props) =>
    props.focus &&
    css`
      color: ${tux_primart};
    `}
    ${(props) =>
    props.disabled &&
    css`
      color: ${success_grey};
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
      top: -8px;
    `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  color: ${grey_text};
  border-radius: 10px;
  padding: 12px;
  border: 1px solid ${grey_text};
  ::placeholder {
    color: ${grey_text}
  }
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
      background: ${true_white};
      ::placeholder {
        color: ${success_grey};
      }
    `}
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${dark_grey};
      font-family: ${pop_reg};
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
