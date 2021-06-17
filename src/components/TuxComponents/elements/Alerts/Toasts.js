import React from 'react'
import styled from 'styled-components'


export const SuccessToast = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:298px;
  height: 143px;
  background: rgba(120, 192, 119, 0.25);
  border-left: 5px solid #78C077;
  box-sizing: border-box;
`
export const ErrorToast = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  width:298px;
  height: 143px;
  background: rgba(234, 74, 70, 0.25);
  border-left: 5px solid #E6211E;;
  box-sizing: border-box;
`


export const XMarker = styled.img`
position: absolute;
top: 21px;
right: 27px;
width: 13px;
align-items: center;
justify-content: center;
`

export const AlertMark = styled.img`
position: absolute;
top:25px;
left: 27px;
width: 20px;
align-items: center;
justify-content: center;
`
