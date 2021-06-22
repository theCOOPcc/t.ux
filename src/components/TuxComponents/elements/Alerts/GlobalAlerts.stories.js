import React from "react";
import {GlobalSuccess, GlobalFailure, ExclaimIcon, ImgButton, XMarker} from './GlobalAlerts.js'


import { withDesign } from "storybook-addon-designs";
export default {
  title: "Global Alerts",
  decorators: [withDesign],
};


export const GlobalConfirm = () => (
  <>
  <GlobalSuccess>
    <ExclaimIcon className='success-icon'  src="/images/GreenExclaimation.svg" />
    <p>
      <strong>Congratulations!</strong> - subtitle goes here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
  </GlobalSuccess>
  </>
)

export const GlobalDeny = () => (
  <>
    <GlobalFailure>
    <ExclaimIcon src="/images/failure.svg" className='failure-icon' />
    <p>
      <strong>Unfortunately</strong> - subtitle goes here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
    </GlobalFailure>
  </>
);



