import styled, { css } from "styled-components";

export const MultChoiceMed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const MultChoiceUpload = styled.div`
  position: relative;
  background: rgba(136, 136, 136, 0.25);
  background-image: url(./images/CloudDL.svg);
  background-repeat: no-repeat;
  background-position: 137.08px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
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
      border: none;
      background-image: url(./images/CloudDL.svg);
      background-repeat: no-repeat;
      background-position: 137.08px;
    `}
  ${(props) =>
    props.pressed &&
    css`
      background: rgba(136, 136, 136, 0.5);
      border: 2px dashed #888888;
      background-image: url(./images/PressedCloud.svg);
      background-repeat: no-repeat;
      background-position: 137.08px;
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25)
    `}
`;

export const MultChoiceFooter = styled.div`
  position: absolute;
  height: 24px;
  left: 0px;
  right: 0px;
  bottom: 11px;
  text-align: center;
`;

export const CloudImg = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 47.33px;
  left: 137.08px;
`;

export const AnswerField = styled.input`
  width: 280px;
  height: 48px;
  border: 1px solid #666666;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 5px;
`;

export const TextHead = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 16.15px;
  font-size: 16px;
  top: 100px;
  line-height: 21px;
  text-align: center;
  color: #666666;
  ${(props) =>
    props.hover &&
    css`
      color: #444444;
    `}
`;
