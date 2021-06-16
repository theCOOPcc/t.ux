import React from 'react'
import styled from 'styled-components'


export const ModalAlert = styled.div`
  position: absolute;
  width: 600px;
  height: 242px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  line-height: 27px;
`

export const ModalGreenButton = styled.button`
display: flex;
position: absolute;
bottom: 0;
right: 0;
box-sizing: border-box;
border: none;
align-items: center;
justify-content: center;
color: #F1F2EB;
width: 50%;
height: 60px;
background: #366062;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 18px;
line-height: 27px;
&:hover {
  cursor: pointer;
}
`
export const ModalWhiteButton = styled.button`
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
position: absolute;
bottom: 0;
left: 0;
border: none;
color: #222222;
width: 50%;
height: 60px;
background: #FFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 18px;
line-height: 27px;
&:hover {
  cursor: pointer;
}
`


export const ModalWarning = styled.div`
  position: absolute;
  top: 300px;
  width: 614px;
  height: 254px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  line-height: 27px;
`
export const WarningMark = styled.img`
position: absolute;
top:23px;
left: 22px;
width: 26px;
align-items: center;
justify-content: center;
`

export const ModalDeleteButton = styled.button`
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
position: absolute;
bottom: 22px;
right: 31px;
border: none;
color: #F1F2EB;
width: 170px;
border-radius: 10px;
height: 50px;
background: #366062;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 18px;
line-height: 27px;
&:hover {
  cursor: pointer;
}
`
export const ModalCancelButton = styled.button`
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
position: absolute;
bottom: 22px;
left: 225px;
border: none;
border-radius: 10px;
color: #222222;
width: 170px;
height: 50px;
background: #FFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 18px;
line-height: 27px;
&:hover {
  cursor: pointer;
}
`