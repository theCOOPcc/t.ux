import React from 'react'
import styled from 'styled-components'
import {DefaultAlert, SuccessAlert, WarningAlert, ErrorAlert, XMarker, AlertIcon} from './InlineAlerts.js'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Alerts",
  decorators: [withDesign], 
};



export const AlertDefault = () => (
  <>
    <DefaultAlert>
     <AlertIcon src='/images/DefaultIcon.svg' />
      <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
      <strong>Default Message - </strong> subtext here
      </p>
      <XMarker src='/images/AlertXs.svg' />
    </DefaultAlert> 
    </>
)

export const AlertSuccess = () => (
  <>
  <SuccessAlert>
  <AlertIcon src='/images/success.svg' alt="" />
    <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
     <strong>Default Message </strong>  - subtext here
    </p>
    <XMarker src='/images/AlertXs.svg' />
  </SuccessAlert>
  </>
)

export const AlertWarning = () => (
  <WarningAlert>
    <AlertIcon src='/images/warning icon.svg' />
   <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
     <strong>Default Message - </strong> subtext here
   </p>
   <XMarker src='/images/AlertXs.svg' />
  </WarningAlert>
)

export const AlertError = () => (
  <ErrorAlert>
    <AlertIcon src='/images/error.svg' />
    <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
    <strong>Default Message - </strong> subtext here
    </p>
    <XMarker src='/images/AlertXs.svg' />
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