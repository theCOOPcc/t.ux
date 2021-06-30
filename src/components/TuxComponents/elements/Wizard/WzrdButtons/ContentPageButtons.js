import styled, { css } from "styled-components";
import { Toolbar } from "../ToolBar/Toolbar.stories";

export const ContentBtn = styled.button`
  position: relative;
  height: 218px;
  display: flex;
  width: 297px;
  border: 3px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  ${(props) =>
    props.hover &&
    css`
      background: rgba(136, 136, 136, 0.5);
      background-image: url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 7px top 6px;
      border: 3px solid rgba(136, 136, 136, 0.5);
    `}
  ${(props) =>
    props.pressed &&
    css`
      background: rgba(136, 136, 136, 0.5);
      border: 3px solid rgba(136, 136, 136, 0.5);
    `}
`;

export const ButtonHead = styled.p`
  position: absolute;
  margin: 0;
  top: 20px;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  ${(props) =>
    props.hover &&
    css`
      filter: blur(4px);
    `}
  ${(props) =>
    props.pressed &&
    css`
      filter: blur(4px);
    `}
`;

export const PlaceholderImg = styled.img`
  ${(props) =>
    props.hover &&
    css`
      filter: blur(4px);
      z-index: -10;
    `}
  ${(props) =>
    props.pressed &&
    css`
      filter: blur(4px);

    `}
`;


