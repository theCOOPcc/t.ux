import React from 'react'
import styled, { css } from "styled-components";
import {
  global_background,
  global_box_shadow,
  complete,
  tux_red
 } from '../../utilities';

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
  background: ${global_background};
  box-shadow: 0px 4px 4px ${global_box_shadow};
  width: 500px;
  height: 94px;
  border-left: 4px solid ${complete};
  box-sizing: border-box;
`

export const GlobalFailure = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: ${global_background};
  box-shadow: 0px 4px 4px ${global_box_shadow};
  width: 500px;
  height: 94px;
  border-left: 4px solid ${tux_red};
  box-sizing: border-box;
`