import styled, { css } from "styled-components";
import WhiteCloud from '../../../../../images/ActivityWizardImgs/CloudDL.svg'
import GreyCloud from '../../../../../images/ActivityWizardImgs/PressedCloud.svg';
import {medium_grey, backButton, sub_grey, dark_grey} from '../../../utilities';

export const MultChoiceMed = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const MultChoiceSm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const MultChoiceUploadMed = styled.button`
  position: relative;
  background: ${sub_grey};
  background-image: url(${WhiteCloud});
  background-repeat: no-repeat;
  background-position: 137.08px 47.33px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 320px;
  height: 150px;
  color: ${medium_grey};
  border: 2px dashed ${backButton};
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      background: ${sub_grey};
      border: 2px solid ${sub_grey};
      background-image: url(${WhiteCloud});
      background-repeat: no-repeat;
      background-position: 137.08px 47.33px;
      box-shadow: 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.pressed &&
    css`
      background: ${sub_grey};
      border: 2px solid ${sub_grey};
      background-image: url(${GreyCloud});
      background-repeat: no-repeat;
      background-position: 137.08px 47.33px;
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
`;
export const MultChoiceUploadSm = styled.button`
  position: relative;
  background: ${sub_grey};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${WhiteCloud});
  background-repeat: no-repeat;
  background-position: 57px 47.33px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 160px;
  height: 150px;
  color: ${medium_grey};
  border: 2px dashed ${backButton};
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      background: ${sub_grey};
      border: 2px solid ${sub_grey};
      background-image: url(${WhiteCloud});
      background-repeat: no-repeat;
      background-position: 57px 47.33px;
      color: ${dark_grey};
      box-shadow:  0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.pressed &&
    css`
      color: ${backButton};
      background: ${sub_grey};
      border: 2px solid ${sub_grey};
      background-image: url(${GreyCloud});
      background-repeat: no-repeat;
      background-position: 57px 47.33px;
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
`;


export const CloudImg = styled.img`
  position: absolute;
`;

export const AnswerField = styled.input`
  width: 280px;
  height: 48px;
  padding-left: 12px;
  border: 1px solid ${medium_grey};
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 5px;
`;

export const TextHead = styled.p`
  margin: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 16.15px;
  font-size: 16px;
  top: 90px;
  line-height: 21px;
  text-align: center;
  color: ${medium_grey};
  ${(props) =>
    props.hover &&
    css`
      color: ${dark_grey};
    `}
`;
