import React from 'react'
// import LogoAsset from '/images/tuxFlower.png'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Asset Logos",
  decorators: [withDesign], 
};

export const VerticalLogo = () => (
    <img src='/images/vertical-logo.svg' />
)

export const HorizontalLogo = () => (
  <img src='/images/logo.png' />
)

export const FlowerLogo = () => (
  <img src='/images/tuxFlower.png' />
)

export const FlowerLogoSVG = () => (
  <img src='/images/TuxFlower.svg' />
)

export const GoogleLogo = () => (
  <img src='/images/google_logo.png' />
)

VerticalLogo.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
}