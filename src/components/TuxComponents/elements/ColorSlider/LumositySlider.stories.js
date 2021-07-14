import React from 'react'
import { Lumosity } from './LumositySlider';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "New Slider",
  decorators: [withDesign],
};

export const LumSlider = () => (
  <Lumosity type='range' ></Lumosity>
)