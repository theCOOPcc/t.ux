import React from 'react'
import styled, { css } from "styled-components";


export const AlertIcon = styled.img`
position: absolute;
left: 20px;
width: 12px;
`

export const XMarker = styled.img`
position: absolute;
right: 45px;
width: 12px;
align-items: center;
justify-content: center;
`

export const ExclaimIcon = styled.img`
  position: absolute;
  left: 50px;
  width: 20px;
`
export const ImgButton = styled.button`
display: flex;
border: none;
background: none;
position: absolute;
top: 20px;
right: 190px;

&:hover {
  cursor: pointer;
}
`

export const GlobalSuccess = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 500px;
  height: 94px;
  border-left: 4px solid #78C077;
  box-sizing: border-box;
`
export const GlobalFailure = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 500px;
  height: 94px;
  border-left: 4px solid #E6211E;
  box-sizing: border-box;
`