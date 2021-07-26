import React from 'react'
import {WideBannerLite,WideBannerGreen,WideBannerRed,AlertMark, MessageHead, MessageSub, XMarker} from './Banners-Wide'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Banners-Wide",
  decorators: [withDesign],
};

export const BannerWideDefault = () => (
  <WideBannerLite>
    <XMarker src='./images/AlertXs.svg' />
    <AlertMark className='wide-default' src='./images/Primary_fill.svg' />
    <MessageHead>Default banner</MessageHead>
    <MessageSub>Body Text</MessageSub>
  </WideBannerLite>
)

export const BannerWideSuccess = () => (
  <WideBannerGreen>
    <XMarker src='./images/AlertXs.svg' />
    <AlertMark className='wide-success' src='./images/success.svg' />
    <MessageHead>Success banner</MessageHead>
    <MessageSub>Body Text</MessageSub>
  </WideBannerGreen>
)

export const BannerWideError = () => (
  <WideBannerRed>
    <XMarker src='./images/AlertXs.svg' />
    <AlertMark className='wide-error' src='./images/error.svg' />
    <MessageHead>Error banner</MessageHead>
    <MessageSub>Body Text</MessageSub>
  </WideBannerRed>
)