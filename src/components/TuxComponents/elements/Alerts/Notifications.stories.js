import React from 'react'
import { NotificationPanel, AlertButton, Notification, MessageHead, XMarker } from './Notifications';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Notifications",
  decorators: [withDesign],
};

export const PanelNote = () => (
  <NotificationPanel>
   <Notification>
     <XMarker src="/images/AlertXs.svg" />
      <MessageHead>
    Notification title goes here
      </MessageHead>
   </Notification>
    
    <AlertButton>
      View All Alerts
    </AlertButton>
  </NotificationPanel>
)