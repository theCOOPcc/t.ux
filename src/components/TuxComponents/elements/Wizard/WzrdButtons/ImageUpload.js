import styled, {css} from 'styled-components'

export const ContentBtn = styled.button`
  position: relative;
  left: 30px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  ${(props) =>
    props.hover &&
    css`
      background:url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 10px top 8px;
    `}
  ${(props) =>
    props.pressed &&
    css`
     box-shadow: inset 0px 25px 30px rgba(34, 34, 34, 0.25);
    `}
  `

export const PlaceholderImg = styled.img`
width: 100%;
height: 100%;
border: 2px solid #222222;
border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      filter: blur(3px);
      z-index: -10;
    `}
  ${(props) =>
    props.pressed &&
    css`
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
`;

// export const ToolbarImg = styled.img`
// opacity: 0;
// width: 0;
// height: 0;
// &:hover {
//   opacity: 1;
//   width: 96px;
//   height: 33px;
//   display: inline-block;
//   background: url('./images/page_button_toolbar.svg');
// }
//   ${(props) =>
//     props.hover &&
//     css`
//       opacity: 1;
//       position: absolute;
//       width: 96px;
//       flex: none;
//       height: 33px;
//       top: 8px;
//       z-index: 1;
//     `}
// `;

export const AnswerField = styled.input`
  width: 280px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 5px;
`;

