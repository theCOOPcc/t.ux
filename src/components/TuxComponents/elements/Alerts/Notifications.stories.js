import React from 'react'
import { NotificationPanel, AlertButton, Notification, MessageHead, MessageSub, XMarker, BellMark, NumberMark, RectangleMark,ExtendNotification, PanelExtend, LeftHeader, RightHeader, BottomRight, BottomLeft } from './Notifications';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Notifications",
  decorators: [withDesign],
};

export const PanelNote = () => (
  <>
  <NotificationPanel>
    <NumberMark>1</NumberMark>
   <BellMark src='./images/bell-icon.svg' />
   <Notification>
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

export const ExtendedPanel = () => (
  <PanelExtend>
    <LeftHeader>
      Today
    </LeftHeader>
    <RightHeader>
      Dismiss all
    </RightHeader>
    <ExtendNotification>
    <XMarker src="/images/AlertXs.svg" />
    <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
    </ExtendNotification>

    <ExtendNotification  style={{borderLeft: '3px solid #E6211E'}}>
    <XMarker src="/images/AlertXs.svg" />
    <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
    </ExtendNotification>

    <ExtendNotification style={{borderLeft: '3px solid #78C077'}}>
    <XMarker src="/images/AlertXs.svg" />
    <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
    </ExtendNotification>

    <ExtendNotification style={{borderLeft: '3px solid #78C077'}}>
    <XMarker src="/images/AlertXs.svg" />
    <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
    </ExtendNotification>

    <ExtendNotification style={{borderLeft: '3px solid #E6211E'}}>
    <XMarker src="/images/AlertXs.svg" />
    <MessageHead>
    Notification title goes here
      </MessageHead>
      <MessageSub>Date and Time</MessageSub>
    </ExtendNotification>
      <BottomRight src='./images/settings_wheel.svg' />
      <BottomLeft>Close Alerts</BottomLeft>
  </PanelExtend>
)