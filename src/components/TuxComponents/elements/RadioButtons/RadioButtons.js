import styled, {css} from 'styled-components'

export const RadioButtonWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  /* margin: 0 10px; */
  ${(props) =>
    props.focus &&
    css`
      border: 3px solid #000000;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 0 3px;
    `}

    ${(props) =>
    props.hover &&
    css`
      text-decoration-line: underline;
    `}
    
  ${(props) =>
    props.disabled &&
    css`
      color: #cccccc;
    `}
`


export const HiddenRadioButtonInput = styled.input`
  opacity: 0;
  /* this centered the label and radio button */
  width: 0;
  padding: 0;
  margin: 0;
`;


export const TestCustomRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20px;
  width: 20px;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #ee6e6b;
    `}

    ${(props) =>
    props.disabled &&
    css`
      border: 1px solid #cccccc;
    `}

    ${props => props.checked && css`
   &::before {
    content: "";
    display: inline-block;
    outline: none;
    border: none;
   }
   &::after {
        content: "";
        background: #1B9BA0;
        border-radius: 50%;
        border: 5px solid transparent
  `}
  `

  