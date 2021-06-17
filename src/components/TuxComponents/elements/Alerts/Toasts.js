import React from 'react'
import styled from 'styled-components'


export const SuccessToast = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width:256px;
  height: 129px;
  line-height: 24px;
  font-size: 16px;
  background: rgba(120, 192, 119, 0.25);
  border: 1px solid #78C077;
  border-left: 5px solid #78C077;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const MessageHead = styled.div`
position: absolute;
left: 23.31%;
/* margin-left: 10px; */
right: 26.69%;
top: 14.69%;
bottom: 68.53%;
width: 148px;
height: 24px;
font: "Poppins", sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
`

export const MessageSub = styled.div`
  position: absolute;
  left: 23.99%;
  right: 37.5%;
  top: 31.47%;
  bottom: 34.97%;
  font-size: 16px;
  line-height: 24px;
`
export const ErrorToast = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  width:256px;
  height: 129px;
  line-height: 24px;
  background: rgba(234, 74, 70, 0.25);
  border: 1px solid #E6211E;
  border-left: 5px solid #E6211E;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


export const XMarker = styled.img`
position: absolute;
left: 86.49%;
right: 9.12%;
top: 14.69%;
bottom: 76.22%;
width: 13px;
align-items: center;
justify-content: center;
`

export const AlertMark = styled.img`
position: absolute;
left: 9.12%;
right: 86.49%;
top: 14.69%;
bottom: 76.22%;
width: 20px;
align-items: center;
justify-content: center;
`
