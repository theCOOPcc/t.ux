import styled, { css } from "styled-components";

export const CreatePageBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px dotted #666666;
  box-sizing: border-box;
  border-radius: 10px;
  width: 297px;
  height: 218px;
  background-image: url(./images/PlusSignDefault.svg);
  background-repeat: no-repeat;
  background-position: right 130px top 110px;
  ${(props) =>
    props.hover &&
    css`
      background: #e0e0e0;
      border: 3px solid #666666;
      background-image: url(./images/PlusSignHover.svg);
      background-repeat: no-repeat;
      background-position: right 130px top 110px;
    `}
  ${(props) =>
    props.pressed &&
    css`
      border: 3px solid #666666;
      background-image: url(./images/PlusSignPressed.svg);
      background-repeat: no-repeat;
      background-position: right 130px top 110px;
    `}
`;

export const ButtonHead = styled.div`
  position: absolute;
  top: 49px;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  text-align: center;
  letter-spacing: -0.02em;
`