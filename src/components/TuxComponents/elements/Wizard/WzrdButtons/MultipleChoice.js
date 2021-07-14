import styled, { css } from "styled-components";
import WhiteCloud from '../../../../../images/ActivityWizardImgs/CloudDL.svg'
import GreyCloud from '../../../../../images/ActivityWizardImgs/PressedCloud.svg'
// import CloudHover from '../../../../../images/ActivityWizardImgs/CloudHover.svg'
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
  background: rgba(136, 136, 136, 0.25);
  background-image: url(${WhiteCloud});
  background-repeat: no-repeat;
  background-position: 137.08px 45px;
  box-sizing: border-box;
  /* align-items: center;
  justify-content: center; */
  border-radius: 5px;
  width: 320px;
  height: 150px;
  color: #666666;
  border: 2px dashed #222222;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      background: #888888;
      border: 2px solid #888888;
      background-image: url(${WhiteCloud});
      background-repeat: no-repeat;
      background-position: 137.08px 45px;
      box-shadow: 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.pressed &&
    css`
      background: rgba(136, 136, 136, 0.5);
      border: 2px solid #888888;
      background-image: url(${GreyCloud});
      background-repeat: no-repeat;
      background-position: 137.08px 45px;
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
`;
export const MultChoiceUploadSm = styled.button`
  position: relative;
  background: rgba(136, 136, 136, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${WhiteCloud});
  background-repeat: no-repeat;
  background-position: 57px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 160px;
  height: 150px;
  color: #666666;
  border: 2px dashed #222222;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      background: #888888;
      border: 2px solid #888888;
      background-image: url(${WhiteCloud});
      background-repeat: no-repeat;
      background-position: 57px 40px;
      color: #444444;
      box-shadow:  0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.pressed &&
    css`
      color: #222222;
      background: rgba(136, 136, 136, 0.5);
      border: 2px solid #888888;
      background-image: url(${GreyCloud});
      background-repeat: no-repeat;
      background-position: 57px 40px;
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
  border: 1px solid #666666;
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
  color: #666666;
  ${(props) =>
    props.hover &&
    css`
      color: #444444;
    `}
`;
