import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";
import { tux_red, medium_grey, tux_primart, success_grey, dark_grey, text_black, white } from '../../utilities/Colors'
export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 260px;
  left: 15px;
  color: ${tux_red};
  font: ${pop_reg};
  font-size: 10px;
  line-height: 15px;
  ${(props) =>
    props.medium &&
    css`
      top: 160px;
    `}
    ${(props) =>
    props.narrow &&
    css`
      top: 125px;
    `}
    ${(props) =>
    props.wide &&
    css`
      top: 57px;
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
      margin-left: 909px;
      top: -13px;
      }
    `}
    ${(props) =>
    props.narrow &&
    css`
      position: absolute;
      margin-left: 209px;
      top: -13px;
    `}
    ${(props) =>
    props.wide &&
    css`
      position: absolute;
      margin-left: 810px;
      top: -13px;
    `}
`;

export const Input = styled.textarea`
  font: ${pop_reg};
  resize: none;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
  width: 941px;
  height: 266px;
  border-radius: 10px;
  padding: 5px 0 0 12px;
  border: 1px solid ${medium_grey};
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
      background-color: ${white};
    `}
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${dark_grey};
      line-height: 21px;
      color: ${dark_grey};
    `}
    ${(props) =>
    props.error &&
    css`
      caret-color: ${tux_red};
      border: 1px solid ${tux_red};
    `}
    ${(props) =>
    props.medium &&
    css`
      height: 167px;
    `}
    ${(props) =>
    props.narrow &&
    css`
      height: 132px;
      width: 240px;
    `}
    ${(props) =>
    props.wide &&
    css`
      height: 63px;
      width: 842px;
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
  margin-bottom: 13px;
  left: 15px;
  top: 20px;
  transition: 0.3s ease all;
  //FOCUS
  ${(props) =>
    props.focus &&
    css`
      top: -7px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      padding: 0px 5px 0 5px;
      color: ${tux_primart};
      background-color: ${white};
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
      font-size: 10px;
      line-height: 15px;
      color: ${dark_grey};
      padding: 0px 5px 0 5px;
      background-color: ${white};
    `}
    //ERROR
    ${(props) =>
    props.error &&
    css`
      top: -7px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      color: ${tux_red};
      background-color: ${white};
      padding: 0px 5px 0 5px;
    `}
`;
