import React from 'react'
import {DefaultAlert, SuccessAlert, WarningAlert, ErrorAlert} from './InlineAlerts.js'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Alerts",
  decorators: [withDesign], 
};

export const AlertDefault = () => (
    <DefaultAlert>
      <strong>Default Message - </strong> subtext here
    </DefaultAlert> 
)

export const AlertSuccess = () => (
  <SuccessAlert>
    <strong>Default Message - </strong> subtext here
  </SuccessAlert>
)

export const AlertWarning = () => (
  <WarningAlert>
    <strong>Default Message - </strong> subtext here
  </WarningAlert>
)

export const AlertError = () => (
  <ErrorAlert>
    <strong>Default Message - </strong> subtext here
  </ErrorAlert>
)



AlertDefault.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
}