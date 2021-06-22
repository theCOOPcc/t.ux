import styled, { css } from "styled-components";

export const CreatePageBtn = styled.button`
  border: 3px dashed #666666;
  box-sizing: border-box;
  border-radius: 10px;
  width: 297px;
  height: 218px;
  background: transparent;
  ${(props) =>
    props.hover &&
    css`
      background: #e0e0e0;
      border: 3px solid #666666;
    `}
  ${(props) =>
    props.pressed &&
    css`
      border: 3px solid #666666;
    `}
`;
