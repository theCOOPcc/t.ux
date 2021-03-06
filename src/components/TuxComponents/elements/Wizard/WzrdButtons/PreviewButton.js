import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  background: #ffffff;
  background-image: url(./images/Preview-Eye.svg);
  background-repeat: no-repeat;
  background-position: 14px;
  position: absolute;
  width: 115px;
  height: 38px;
  left: 20px;
  top: 20px;
  border: 1px solid #366062;
  box-sizing: border-box;
  border-radius: 5px;
  color: #366062;
  ${(props) =>
    props.pressed &&
    css`
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  ${(props) =>
    props.hover &&
    css`
      display: flex;
      background: #366062;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: white;
      background-image: url(./images/Preview-White-Eye.svg);
      background-repeat: no-repeat;
      background-position: 14px;
    `}
`;

export const ButtonText = styled.p`
  margin: 0;
  display: flex;
  width: 66px;
  height: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 40px;
  top: 9px;
  font-size: 16px;
  line-height: 24px;
`;
