import React from 'react'
import styled, { css } from "styled-components";


export const  XMarker = styled.button`
/* Position absolute and right 20px was breakthrough that enabled me to Center the text and move the X to the right */
position: absolute;
right: 14px;
background: none;
border: none;
/* width: 13.71px; */
/* height: 13.71px; */
font-size: 10px;
`

export const DefaultAlert = styled.button`
  display: flex;
  border: 1px solid #9EE8FF;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(158, 232, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
`
export const SuccessAlert = styled.button`
  display: flex;
  border: 1px solid #78C077;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(120, 192, 119, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
`
export const WarningAlert = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(255, 228, 92, 0.2);
  border: 1px solid #FFE45C;
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
  height: 20px;
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #E6211E;
  box-sizing: border-box;
  border-radius: 2px;
`