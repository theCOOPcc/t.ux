import styled, { css } from "styled-components";
import { success } from "../../utilities/Colors";

export const ToggleWrapper = styled.div`
  position: relative;
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
  ${(props) => props.hover && css`
    background: #989898;
  `}
`;

export const ToggleBall = styled.div`
  width: 17px;
  height: 17px;
  top: 4px;
  left: 7px;
  position: absolute;
  left: 9.86%;
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

export const ToggleCheckBoxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
