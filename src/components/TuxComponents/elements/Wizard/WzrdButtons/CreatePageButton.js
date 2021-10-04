import styled, { css } from "styled-components";
import {medium_grey, wzrd_grey, backButton} from '../../../utilities';

export const CreatePageBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 3px dashed ${medium_grey};
  box-sizing: border-box;
  border-radius: 10px;
  width: 297px;
  height: 218px;
  background: transparent;
  background-image: url(./images/PlusSignDefault.svg);
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: right 130px top 110px;
  cursor: pointer;
  ${(props) =>
    props.hover &&
    css`
      background: ${wzrd_grey};
      border: 3px solid ${medium_grey};
      background-image: url(./images/PlusSignHover.svg);
      background-repeat: no-repeat;
      background-position: right 130px top 110px;
      box-shadow: 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.pressed &&
    css`
      border: 3px solid ${backButton};
      background-image: url(./images/PlusSignPressed.svg);
      background-repeat: no-repeat;
      background-position: right 130px top 110px;
    `}
`;

export const ButtonHead = styled.p`
  position: absolute;
  top: 49px;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  text-align: center;
  letter-spacing: -0.02em;
`