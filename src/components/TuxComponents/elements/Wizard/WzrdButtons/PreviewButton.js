import styled, { css } from "styled-components";

export const PreviewBtn = styled.img`
  width: 20px;
  height: 11.2px;
  display: flex;
  margin-right: 9px;
  align-items: center;
  text-align: right;
  ${(props) =>
    props.hover &&
    css`
      color: teal;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color: #78d6da;
  ${(props) =>
    props.pressed &&
    css`
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      width: 115px;
      height: 38px;
    `}
    ${(props) =>
    props.hover &&
    css`
      color: teal;
    `}
  
`;
