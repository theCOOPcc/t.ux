import styled, { css } from "styled-components";
import { success } from "../../utilities/Colors";

export const ToggleWrapper = styled.div`
  ${(props) =>
    props.focus &&
    css`
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      width: 84px;
      height: 36px;
      border-radius: 38px;
      border: 4px solid #000000;
      box-sizing: border-box;
    `}
`;
export const ToggleBackground = styled.div`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 25px;
  left: 0%;
  right: 15.49%;
  top: 0%;
  bottom: 0%;
  background: #c4c4c4;
  border-radius: 38px;
  ${(props) =>
    props.checked &&
    css`
      background: ${success};
    `}
  ${(props) =>
    props.hover &&
    css`
      background: #989898;
    `}
  ${(props) =>
    props.focus &&
    css`
      width: 71px;
      left: 3%;
      top: 5%;
      background: #989898;
    `}
`;

export const ToggleBall = styled.div`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 9%;
  right: 66.2%;
  top: 16%;
  bottom: 10%;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.checked &&
    css`
      left: 65%;
      right: 32.54%;
      top: 16%;
      bottom: 16%;
    `}
`;

export const ToggleLabel = styled.p`
  position: absolute;
  left: 140%;
  right: 0%;
  top: -15%;
  bottom: 0%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #333333;
`;

export const ToggleCheckBoxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;
