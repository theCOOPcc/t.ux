import React from "react";
import {GlobalSuccess, GlobalFailure, ExclaimIcon, ImgButton, XMarker} from './GlobalAlerts.js'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Global Alerts",
  decorators: [withDesign],
};

export const GlobalDeny = () => (
  <>
    <GlobalFailure>
    <ExclaimIcon className='success-icon' src="/images/failure.svg" />
    <p>
      <strong>Unfortunately</strong> - subtitle goes here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
    </GlobalFailure>
  </>
);

export const GlobalConfirm = () => (
  <>
  <GlobalSuccess>
    <ExclaimIcon className='failure-icon' src="/images/GreenExclaimation.svg" />
    <p>
      <strong>Congratulations!</strong> - subtitle goes here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
  </GlobalSuccess>
  </>
)


