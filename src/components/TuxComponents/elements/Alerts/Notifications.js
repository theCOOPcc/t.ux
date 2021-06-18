import styled from 'styled-components'

export const NotificationPanel = styled.div`
display: flex;
position: relative;
width: 302px;
height: 501px;
left: 57px;
background: #EFEDED;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
right: 50px;
background: #78D6DA;
border: none;
border-radius: 5px;
`

export const Notification = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 296px;
  height: 85px;
  right: 2px;
  left:2px;
  top: 2px;
  background: #FFFFFF;
  border-left: 3px solid #FFE45C;
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
  left: 23.99%;
  right: 37.5%;
  top: 31.47%;
  bottom: 34.97%;
  font-size: 16px;
  line-height: 24px;
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