import styled, {css} from 'styled-components' 

export const ComponentWrapper = styled.div`
position: relative;
width: 500px;
height: 300px;
border: 2px dashed rgba(136, 136, 136, 0.5);
box-sizing: border-box;
border-radius: 5px;
${props => props.hover && css`
      background:url(./images/page_button_toolbar.svg);
      background-repeat: no-repeat, no-repeat;
      background-position: right 105px top 55px;
  `}
`

export const PlaceholderImage = styled.img`
  position: absolute;
  display: block;
  left: 100px;
  right: 100px;
  top: 50px;
  bottom: 108px;
  width: 300px;
  ${props => props.hover && css`
      z-index: -10;
  `}
  ${props => props.pressed && css`
  background: rgba(51, 51, 51, 0.5);
  `}

`

export const AnswerField = styled.input`
position: absolute;
left:  140px;
  width: 280px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top:15px;
  align-items: center;
  justify-content: center;
`;

export const FileMessage = styled.p`
  margin: 0;
  padding: 0;
  color: #888888;
  position: absolute;
  width: 109px;
  height: 13px;
  left: 205px;
  top: 220px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.5px;
`;