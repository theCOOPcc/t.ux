import React from 'react'
import styled, { css } from "styled-components";
import { 
  inline_default_border,
  inline_default_bg,
  inline_succ_border,
  inline_succ_bg,
  inline_warning_border,
  inline_warning_bg,
  inline_error_border,
  inline_error_bg,
} from '../../utilities';

export const AlertIcon = styled.img`
position: absolute;
left: 20px;
width: 12px;
`

export const XMarker = styled.img`
position: absolute;
right: 20px;
width: 9px;
align-items: center;
justify-content: center;
`

export const ImgButton = styled.button`
display: flex;
border: none;
background: none;
position: absolute;
align-items: center;
right: 5px;
&:hover {
  cursor: pointer;
}
`

export const DefaultAlert = styled.button`
  display: flex;
  border: 1px solid ${inline_default_border};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${inline_default_bg};
  box-sizing: border-box;
  border-radius: 2px;
`
export const SuccessAlert = styled.button`
  display: flex;
  border: 1px solid ${inline_succ_border};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${inline_succ_bg};
  box-sizing: border-box;
  border-radius: 2px;
  /* background-image: url('/images/success.svg'); */
`
export const WarningAlert = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${inline_warning_bg};
  border: 1px solid ${inline_warning_border};
  box-sizing: border-box;
  border-radius: 2px;
`
export const ErrorAlert = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${inline_error_bg};
  border: 1px solid ${inline_error_border};
  box-sizing: border-box;
  border-radius: 2px;
`