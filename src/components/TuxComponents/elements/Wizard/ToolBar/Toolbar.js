import styled, {css} from 'styled-components';
import {text_black, toolbar_grey, future_text} from '../../../utilities';

export const Wrapper = styled.div`
  position: relative;
  width: 96px;
  height: 33px;
  border: 1px solid ${text_black};
  border-radius: 4px;
`

export const ImageButtonTrash = styled.button`
position: absolute;
width: 27px;
height: 27px;
left: 3.12%;
right: 68.75%;
top: 9.09%;
bottom: 9.09%;
border-radius: 3px;
cursor: pointer;
border: none;
display: flex;
background:transparent;
${props => props.hover && css`
background: ${toolbar_grey};
`}
${props => props.pressed && css`
background: ${future_text};
`}
`
export const ImageButtonEdit = styled.button`
padding: 0;
margin: 0;
position: absolute;
width: 27px;
height: 27px;
left: 34.29%;
right: 39.58%;
top: 9.09%;
bottom: 9.09%;
border-radius: 3px;
cursor: pointer;
border: none;
display: flex;
justify-content: center;
align-items: center;
background:transparent;
${props => props.hover && css`
background: ${toolbar_grey};
`}
${props => props.pressed && css`
background: ${future_text};
`}
`
export const ImageButtonDownload = styled.button`
padding: 0;
margin: 0;
position: absolute;
left: 66.67%;
right: 5.21%;
top: 9.09%;
bottom: 9.09%;
width: 27px;
height: 27px;
border-radius: 3px;
cursor: pointer;
border: none;
display: flex;
justify-content: center;
align-items: center;
background:transparent;
${props => props.hover && css`
background: ${toolbar_grey};
`}
${props => props.pressed && css`
background: ${future_text};
`}
`

export const ButtonImageTrash = styled.img`
  position: absolute;
  top: 8px;
`
export const ButtonImageEdit = styled.img`
position: absolute;
top: 8px;
`
export const ButtonImageDownload= styled.img`
position: absolute;
top: 8px;
`