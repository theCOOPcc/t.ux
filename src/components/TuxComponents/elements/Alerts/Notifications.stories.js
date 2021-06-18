import React from 'react'
import { NotificationPanel, AlertButton, Notification, MessageHead, MessageSub, XMarker, BellMark, NumberMark, RectangleMark,Bubble } from './Notifications';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Notifications",
  decorators: [withDesign],
};

export const PanelNote = () => (
  <>
  <NotificationPanel>
   <BellMark src='./images/bell-icon.svg' />
   <Notification>
    <NumberMark src='./images/numbernotification.svg' />
    <RectangleMark src='./images/rectangle-12.png' />
     <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
   </Notification>

   <Notification style={{borderLeft: '3px solid #E6211E'}}>
   <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
   </Notification>
   <Notification style={{borderLeft: '3px solid #78C077'}}>
   <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
   </Notification>
   <Notification style={{borderLeft: '3px solid #78C077'}}>
   <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
   </Notification>

   <Notification style={{borderLeft: '3px solid #E6211E'}}>
   <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
   </Notification>
    
    <AlertButton>
      View all alerts
    </AlertButton>

  </NotificationPanel>
  </>
)