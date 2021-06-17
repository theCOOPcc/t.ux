import React from 'react'
import {SuccessToast, AlertMark, ErrorToast, XMarker, MessageHead, MessageSub} from './Toasts'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Toast Alert",
  decorators: [withDesign],
};

export const ToastSuccess = () => (
  <SuccessToast>
    <MessageHead className='toast-success'>
    <strong>Success Message</strong>  
    </MessageHead>
   
    <AlertMark src="/images/success.svg" />
    <MessageSub>
      Your subtitle text goes here
    </MessageSub>
    <XMarker src="/images/AlertXs.svg"/>
  </SuccessToast>
)

export const ToastError = () => (
  <ErrorToast>
    <AlertMark src="/images/error.svg" />
    <MessageHead className='toast-error' style={{marginLeft: '10px'}}>Error Message</MessageHead>
    <MessageSub>Your subtitle text goes here </MessageSub>
    <XMarker src="/images/AlertXs.svg"/>
  </ErrorToast>
)