import React from 'react'
import styled, { css } from "styled-components";
import { 
  complete,
  alert_default,
  alert_warning,
  alert_error
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
  border: 1px solid ${alert_default};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${alert_default};
  box-sizing: border-box;
  border-radius: 2px;
`
export const SuccessAlert = styled.button`
  display: flex;
  border: 1px solid ${complete};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
  background: ${complete};
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
  background: ${alert_warning};
  border: 1px solid ${alert_warning};
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
  background: ${alert_error};
  border: 1px solid ${alert_error};
  box-sizing: border-box;
  border-radius: 2px;
`