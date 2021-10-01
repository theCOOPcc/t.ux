import styled, { css } from "styled-components";
import { pop_reg } from "../../utilities/Type";
import { tux_red, dark_grey, tux_primart, medium_grey, success_grey} from '../../utilities'

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

export const DropDownArrow = styled.img`
  width: 13.98px;
  height: 8.9px;
  margin: 20px;
  border: none;
  position: absolute;
  margin-left: 250px;
`;

export const Input = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  border-radius: 10px;
  padding: 20px 0 0 12px;
  border: 1px solid ${medium_grey};
  ${(props) =>
    props.focus &&
    css`
      caret-color: ${tux_primart};
      border: 1px solid ${tux_primart};
    `}
  ${(props) =>
    props.hover &&
    css`
      border: 1px solid ${dark_grey};
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
  margin-bottom: 13px;
  left: 12px;
  top: 15px;
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
      color: ${tux_primart};
    `}
  //DISABLED
  ${(props) =>
    props.disabled &&
    css`
      font-size: 14px;
      line-height: 21px;
      color: ${success_grey};
    `}
    ${(props) =>
    props.hover &&
    css`
      color: ${dark_grey};
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
      color: ${medium_grey};
    `}
    //ERROR
    ${(props) =>
    props.error &&
    css`
      top: 6px;
      left: 5px;
      font-size: 10px;
      line-height: 15px;
      color: ${tux_red};
    `}
`;
