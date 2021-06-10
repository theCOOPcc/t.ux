import React from 'react'
import styled from 'styled-components'
import {DefaultAlert, SuccessAlert, WarningAlert, ErrorAlert, XMarker} from './InlineAlerts.js'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Alerts",
  decorators: [withDesign], 
};



export const AlertDefault = () => (
  <>
    <DefaultAlert>
      <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
      <strong>Default Message - </strong> subtext here
      </p>
      <XMarker style={{color: '#222222'}}>X</XMarker>
    </DefaultAlert> 
    </>
)

export const AlertSuccess = () => (
  <>
  <SuccessAlert>
    <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
     <strong>Default Message </strong>  - subtext here
    </p>
    <XMarker style={{color: '#222222'}}>X</XMarker>
  </SuccessAlert>
  </>
)

export const AlertWarning = () => (
  <WarningAlert>
   <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
     <strong>Default Message - </strong> subtext here
   </p>
   <XMarker style={{color: '#222222'}}>X</XMarker> 
  </WarningAlert>
)

export const AlertError = () => (
  <ErrorAlert>
    <p style={{color: 'rgba(51, 51, 51, 0.75)'}}>
    <strong>Default Message - </strong> subtext here
    </p>
    <XMarker style={{color: '#222222'}}>X</XMarker>
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