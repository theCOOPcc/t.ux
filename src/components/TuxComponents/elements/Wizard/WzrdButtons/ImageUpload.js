import styled, {css} from 'styled-components'

export const ContentBtn = styled.button`
  position: relative;
  left: 30px;
  width: 295px;
  height: auto;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
  background: transparent;
  border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      background:url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 8px top 8px;
    `}
  ${(props) =>
    props.pressed &&
    css`
     box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  `
export const ContentBtnSmall = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  left: 95px;
  height: 150px;
  width: 160px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  background: transparent;
  ${(props) =>
    props.hover &&
    css`
      background:url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 8px top 12px;
      background-size: 90px;
    `}
  ${(props) =>
    props.pressed &&
    css`
     box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
    `}
  `

export const PlaceholderImg = styled.img`
position: relative;
margin: 0;
display: block;
width: 100%;
border-radius: 5px;
border: 3px solid #222222;
  ${(props) =>
    props.hover &&
    css`
      filter: blur(2px);
      z-index: -10;
    `}
  ${(props) =>
    props.pressed &&
    css`
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
      z-index: -10;
    `}
`;
export const PlaceholderImgSM = styled.img`
position: relative;
width: 100%;
height: 150px;
border-radius: 5px;
  ${(props) =>
    props.hover &&
    css`
      filter: blur(2px);
      z-index: -10;
    `}
  ${(props) =>
    props.pressed &&
    css`
      box-shadow: inset 0px 4px 8px rgba(34, 34, 34, 0.25);
      opacity: 1;
      z-index: -10;
    `}
`;


export const AnswerField = styled.input`
position: absolute;
left:  65px;
  width: 250px;
  height: 48px;
  padding-left: 12px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top:15px;
  align-items: center;
  justify-content: center;
`;



