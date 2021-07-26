import React from 'react'
import {
  DefaultAlert,
  WarningAlert,
  ErrorAlert,
  AlertIcon,
} from "./Banners.js";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Banners",
  decorators: [withDesign],
};

export const InfoBanner = () => (
  <div style={{width: '656px'}}>
    <DefaultAlert >
      <AlertIcon className='default-banner' style={{ width: "20px" }} src="/images/DefaultIcon.svg" />
      <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
        <strong>Default Message - </strong> subtext here
      </p>
    </DefaultAlert>
  </div>
);

export const ErrorBanner = () => (
  <div style={{width:'656px'}}>
  <ErrorAlert>
    <AlertIcon className='error-banner' src="/images/error.svg" />
    <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
      <strong>Default Message - </strong> subtext here
    </p>
  </ErrorAlert>
  </div>
);

export const WarningBanner = () => (
  <div style={{width: '656px'}}>
  <WarningAlert >
    <AlertIcon className='warning-banner' src="/images/warning icon.svg" />
    <p style={{ color: "rgba(51, 51, 51, 0.75)" }}>
      <strong>Default Message - </strong> subtext here
    </p>
  </WarningAlert>
  </div>
);