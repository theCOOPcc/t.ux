import React from 'react'
import styled from 'styled-components'

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
  border: 1px solid #9EE8FF;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 25px;
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
  height: 25px;
  background: rgba(120, 192, 119, 0.2);
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
  height: 25px;
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #E6211E;
  box-sizing: border-box;
  border-radius: 2px;
`