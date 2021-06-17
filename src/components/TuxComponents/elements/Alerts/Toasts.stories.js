import React from 'react'
import {SuccessToast, AlertMark, ErrorToast, XMarker} from './Toasts'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Toast Alert",
  decorators: [withDesign],
};

export const ToastSuccess = () => (
  <SuccessToast>
    <AlertMark src="/images/success.svg" />
    <h3>Success Message</h3>
    <p>Your subtitle goes here </p>
    <XMarker src="/images/AlertXs.svg"/>
  </SuccessToast>
)

export const ToastError = () => (
  <ErrorToast>
    <AlertMark src="/images/error.svg" />
    <h3>Error Message</h3>
    <p>Your subtitle goes here </p>
    <XMarker src="/images/AlertXs.svg"/>
  </ErrorToast>
)