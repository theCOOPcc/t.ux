import styled, {css} from 'styled-components'
import { 
  not_started,
  text_black,
  txtbtn_props_disabled,
  future_text,
  present_text,
  banner_wide_red_border
} from '../../utilities'

export const RadioButtonWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${not_started};
  /* margin: 0 10px; */
  /* The left and right focus state border */
  padding: 0 4px;
  ${(props) =>
    props.focus &&
    css`
      border: 3px solid ${text_black};
      box-sizing: border-box;
      border-radius: 5px;
    `}

    ${(props) =>
    props.hover &&
    css`
      text-decoration-line: underline;
    `}
    
  ${(props) =>
    props.disabled &&
    css`
      color: ${txtbtn_props_disabled};
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
  border: 1px solid ${future_text};
  box-sizing: border-box;
  border-radius: 50%;
  /* From the radio input to the label text  */
  margin-right: 5px;
  cursor: pointer;
  

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${banner_wide_red_border};
    `}

    ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${txtbtn_props_disabled};
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
        background: ${present_text};
        border-radius: 50%;
        border: 5px solid transparent
  `}
  `

  