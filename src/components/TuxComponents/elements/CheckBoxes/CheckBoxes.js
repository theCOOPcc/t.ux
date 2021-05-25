import styled, {css} from 'styled-components';
import React from 'react'


export const Label = styled.label`
  display: flex;
  text-align: center;
  vertical-align: center;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
  color: #333333;
  width: 100px;
  cursor: pointer;

 

  ${props => props.focus && css`
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 5px;
  `}
  ${props => props.disabled && css`
  color: #CCCCCC;
  `}
  
 

`

// export const FieldSet = styled.fieldset`
//     display: flex;
//     border: none;
//     align-items:center;
// `

export const HiddenCheckboxInput = styled.input`
  /* display: none; */
 &:focus {

 }
  
  /* border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 5px;
  width:20px;
  height: 20px;
  margin-right: 5px; */
  /* hover */
 
  `

export const CustomCheckboxInput = styled.span`
display: inline-block;
 height: 20px;
 width: 20px;
 border: 1px solid #999999;
 box-sizing: border-box;
 border-radius: 5px;
 margin-right: 5px;
 cursor: pointer;

 
 ${props => props.hover && css`
    background: rgba(51, 51, 51, 0.5);
  `}
  ${props => props.disabled && css`
  border: 1px solid #CCCCCC;
  `}

  ${props => props.error && css`
    border: 1px solid #EE6E6B
  `}
`