import React from 'react'
import styled, { css } from "styled-components";


export const AlertIcon = styled.img`
position: absolute;
left: 20px;
width: 12px;
`


export const XMarker = styled.img`
position: relative;
right: 1009px;
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
  border: 1px solid #9ee8ff;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 667px;
  height: 42.28px;
  background: rgba(158, 232, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
`;
export const SuccessAlert = styled.button`
  display: flex;
  border: 1px solid #78c077;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 667px;
  height: 42.28px;
  background: rgba(120, 192, 119, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
  /* background-image: url('/images/success.svg'); */
`;
export const WarningAlert = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 667px;
  height: 42.28px;
  background: rgba(255, 228, 92, 0.2);
  border: 1px solid #ffe45c;
  box-sizing: border-box;
  border-radius: 2px;
`;
export const ErrorAlert = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 667px;
  height: 42.28px;
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #e6211e;
  box-sizing: border-box;
  border-radius: 2px;
`;