import React from 'react'
import styled from 'styled-components'
import {   
  global_background,
  global_box_shadow, 
  modal_color,
  intro_text,
  global_box_shadow,
  backButton,
  true_white
 } from '../../utilities';

export const ModalAlert = styled.div`
  position: absolute;
  width: 600px;
  height: 242px;
  background: ${global_background};
  box-shadow: 0px 4px 4px ${global_box_shadow};
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
color: ${modal_color};
width: 50%;
height: 60px;
background: ${intro_text};
box-shadow: 0px 4px 4px ${global_box_shadow};
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
color: ${backButton};
width: 50%;
height: 60px;
background: ${global_background};
box-shadow: 0px 4px 4px ${global_box_shadow};
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
  background: ${global_background};
  box-shadow: 0px 4px 4px ${global_box_shadow};
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
color: ${model_color};
width: 170px;
border-radius: 10px;
height: 50px;
background: ${intro_text};
box-shadow: 0px 4px 4px ${global_box_shadow};
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
color: ${backButton};
width: 170px;
height: 50px;
background: ${true_white};
box-shadow: 0px 4px 4px ${global_box_shadow};
font-size: 18px;
line-height: 27px;
&:hover {
  cursor: pointer;
}
`