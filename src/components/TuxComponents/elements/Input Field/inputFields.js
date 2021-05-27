import styled, { css } from "styled-components";
import { Poppins } from "../../utilities/Type";

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 43px;
  left: 15px;
  color: #e6211e;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
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
  border-radius: 10px 10px 0px 0px;
  padding: 20px 0 0 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #888888;
  ${(props) =>
    props.focus &&
    css`
      caret-color: #54989b;
      border: 2px solid #54989b;
      transition: 0.3s ease all;
      border-top: none;
      border-left: none;
      border-right: none;
      /* ::placeholder {
        position: relative;
      } */
    `}
  ${(props) =>
    props.hover &&
    css`
      background: rgba(136, 136, 136, 0.25);
      border: 1px solid #888888;
      border-top: none;
      border-left: none;
      border-right: none;
    `}
  ${(props) =>
    props.disabled &&
    css`
      background: rgba(240, 240, 240, 0.75);
      border: 1px solid rgba(136, 136, 136, 0.5);
      border-top: none;
      border-left: none;
      border-right: none;
    `}
  ${(props) =>
    props.active &&
    css`
      border: 2px solid #222222;
      border-top: none;
      border-left: none;
      border-right: none;
      font-family: ${Poppins};
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #565656;
      /* ::placeholder {
        position: relative;        transition: 0.3s ease all;
      } */
    `}
    ${(props) =>
    props.error &&
    css`
      /* ::placeholder {
        position: relative;
        top: 12px;
        transition: 0.3s ease all;
      } */
      caret-color: #e6211e;
    `}
`;

export const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
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
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
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
