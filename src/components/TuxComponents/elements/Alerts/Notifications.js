import styled from 'styled-components'
import {
  global_background,
  global_box_shadow,
  notification_panel_bg,
  notification_alert_btn,
  alert_warning_border,
  intro_text,
  notification_header_color
} from '../../utilities';

export const NotificationPanel = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 302px;
height: 501px;
left: 57px;
top: 50px;
background: ${notification_panel_bg};
box-shadow: 0px 4px 4px ${global_box_shadow};
border-radius: 5px;
`

export const AlertButton = styled.button`
position: absolute;
width: 202px;
font-weight: bold;
font-size: 20px;
line-height: 30px;
height: 50px;
bottom: 7px;
left: 57px;
background: ${notification_alert_btn};
border: none;
border-radius: 5px;
cursor: pointer;
`

export const Notification = styled.div`
  position: relative;
  display: flex;
  width: 97.5%;
  height: 85px;
  right: 2px;
  left:2px;
  top: 2px;
  background: ${global_background};
  border-left: 3px solid ${alert_warning_border};
  margin-top: 1px;
`

export const MessageHead = styled.div`
  position: absolute;
  /* margin-left: 10px; */
  width: 286px;
  height: 25px;
  left: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`

export const MessageSub = styled.div`
 position: absolute;
  width: 94px;
  height: 9px;
  left: 10px;
  bottom: 15px;
  font-size: 12px;
  line-height: 18px;
`

export const XMarker = styled.img`
position: absolute;
right: 11px;
top: 9px;
bottom: 76.22%;
width: 10px;
align-items: center;
justify-content: center;
`

export const BellMark = styled.img`
position: absolute;
top: -30px;
right: 5px;
width: 20px;
align-items: center;
justify-content: center;
`
export const NumberMark = styled.div`
position: absolute;
color: white;
display: flex;
right: -10px;
top: -50px;
border-radius: 50%;
height: 20px;
width: 20px;
align-items: center;
justify-content: center;
background: ${intro_text};
z-index: 1;
`
export const RectangleMark = styled.img`
position: absolute;
top: -5px;
right: 2px;
width: 20px;
align-items: center;
justify-content: center;
`

export const Bubble = styled.button`
  position: absolute;
  display: inline-block;
top: -55px;
right: -10px;
width: 20px;
align-items: center;
justify-content: center;
background: transparent;
border: none;
`

export const PanelExtend = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 396px;
height: 747px;
left: 57px;
top: 10px;
background: ${notification_panel_bg};
box-shadow: 0px 4px 4px ${global_box_shadow};
border-radius: 5px;
`

export const ExtendNotification = styled.div`
  position: relative;
  display: flex;
  width: 97.5%;
  height: 127px;
  right: 2px;
  left:2px;
  top: 37px;
  background: ${global_background};
  border-left: 3px solid ${alert_warning_border};
  margin-top: 1px;
`

export const LeftHeader = styled.div`
position: absolute;
display: flex; 
top: 11px;
justify-content: center;
align-items: center;
text-align: center;
width: 58px;
height: 27px;
font-weight: bold;
font-size: 18px;
line-height: 27px;
display: flex;
`
export const RightHeader = styled.a`
position: absolute;
  width: 90px;
  height: 25px;
  right: 0px;
  top: 13px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: ${notification_rheader_color};
  cursor: pointer;
`

export const BottomRight = styled.img`
  position: absolute;
  bottom: 24px;
  right: 22px;
`

export const BottomLeft = styled.a`
position: absolute;
  bottom: 22px;
  font-size: 18px;
  line-height: 27px;
  left: 22px;
  text-decoration-line: underline;
  cursor: pointer;
  color: ${notification_header_color};
`