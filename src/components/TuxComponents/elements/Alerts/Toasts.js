import React from 'react'
import styled from 'styled-components'
import { 
  success,
  global_box_shadow,
  toasts_error_bg,
  tux_red
} from '../../utilities';

import { 
  banner_info
} from '../../utilities'


export const SuccessToast = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width:256px;
  height: 129px;
  line-height: 24px;
  font-size: 16px;
  background: ${success};
  border: 1px solid ${success};
  border-left: 5px solid ${success};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px ${global_box_shadow};
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
  background: ${toasts_error_bg};
  border: 1px solid ${tux_red};
  border-left: 5px solid ${tux-red};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px ${global_box_shadow};
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
