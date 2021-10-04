import styled, { css } from "styled-components";
import { Toolbar } from "../ToolBar/Toolbar.stories";
import {medium_grey, sub_grey} from '../../../utilities';

export const ContentBtn = styled.button`
  position: relative;
  height: 218px;
  display: flex;
  width: 297px;
  border: 3px solid ${medium_grey};
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  ${(props) =>
    props.hover &&
    css`
      background: ${sub_grey};
      background-image: url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 7px top 6px;
      border: 3px solid ${sub_grey};
    `}
  ${(props) =>
    props.pressed &&
    css`
      background: ${sub_grey};
      border: 3px solid ${sub_grey};
    `}
`;

export const ButtonHead = styled.p`
  position: absolute;
  margin: 0;
  top: 20px;
  font-size: 16px;
  line-height: 140%;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  z-index: -10;
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


