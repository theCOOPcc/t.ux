import styled, { css } from "styled-components";
import { success } from "../../utilities/Colors";
import { text_black, solid_divider_bg, toggle_bg, global_background, not_started, notification_panel_box_shadow} from "../../utilities/"

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
      border: 4px solid ${text_black};
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
  background: ${solid_divider_bg};
  border-radius: 38px;
  ${(props) =>
    props.checked &&
    css`
      background: ${success};
    `}
  ${(props) =>
    props.hover &&
    css`
      background: ${toggle_bg};
    `}
  ${(props) =>
    props.focus &&
    css`
      width: 71px;
      left: 3%;
      top: 5%;
      background: ${toggle_bg};
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
  background: ${global_background};
  box-shadow: 0px 4px 4px ${notification_panel_box_shadow};
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
  color: ${not_started};
`;

export const ToggleCheckBoxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;
