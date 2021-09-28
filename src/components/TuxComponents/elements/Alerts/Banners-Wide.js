import React from 'react'
import styled from 'styled-components'

import {
  banner_wide_lite_bg,
  banner_wide_lite_border,
  banner_wide_grn_border,
  banner_wide_grn_bg,
  banner_wide_red_bg,
  banner_wide_red_border, 
  success,
  complete
} from "../../utilities";

export const AlertMark = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
`

export const WideBannerLite = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 620px;
  height: 88px;
  background: ${banner_wide_lite_bg};
  border: 1px solid ${banner_wide_lite_border};
  border-radius: 8px;
`

export const WideBannerGreen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 620px;
  height: 88px;
  background: ${banner_wide_grn_bg};
  border: 1px solid ${banner_wide_grn_border};
  border-radius: 8px;
`

export const WideBannerRed = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 620px;
  height: 88px;
  background: ${banner_wide_red_bg};
  border: 1px solid ${banner_wide_red_border};
  border-radius: 8px;
`

export const MessageHead = styled.div`
  position: absolute;
  width: 508px;
  height: 24px;
  left: 56px;
  top: 20px;
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
  width: 508px;
  height: 20px;
  left: 56px;
  top: 42px;
  font-size: 16px;
  line-height: 24px;
`

export const XMarker = styled.img`
position: absolute;
right: 20px;
top: 20px;
width: 13px;

/* background: #888888; */
`