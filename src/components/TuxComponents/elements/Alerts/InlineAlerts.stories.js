import React from "react";
import {
  DefaultAlert,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  XMarker,
  AlertIcon,
  ImgButton,
} from "./InlineAlerts.js";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Inline Alerts",
  decorators: [withDesign],
};

export const AlertDefault = () => (
  <>
    <DefaultAlert >
      <AlertIcon className='default-alert' style={{ width: "12px" }} src="/images/DefaultIcon.svg" />
      <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
        <strong>Default Message - </strong> subtext here
      </p>
      <ImgButton type="">
        <XMarker src="/images/AlertXs.svg" />
      </ImgButton>
    </DefaultAlert>
  </>
);

export const AlertSuccess = () => (
  <>
    <SuccessAlert>
      <AlertIcon className='success-alert' src="/images/success.svg" alt="" />
      <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
        <strong>Default Message </strong> - subtext here
      </p>
      <ImgButton type="">
        <XMarker src="/images/AlertXs.svg" />
      </ImgButton>
    </SuccessAlert>
  </>
);

export const AlertWarning = () => (
  <WarningAlert>
    <AlertIcon className='warning-alert' src="/images/warning icon.svg" />
    <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
      <strong>Default Message - </strong> subtext here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
  </WarningAlert>
);

export const AlertError = () => (
  <ErrorAlert>
    <AlertIcon className='error-alert' src="/images/error.svg" />
    <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
      <strong>Default Message - </strong> subtext here
    </p>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
  </ErrorAlert>
);

AlertDefault.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
};
