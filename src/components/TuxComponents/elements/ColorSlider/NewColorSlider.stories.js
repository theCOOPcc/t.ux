import React from 'react';
import { Slider } from './NewColorSlider';

import { withDesign } from "storybook-addon-designs";
export default {
  title: "New Slider",
  decorators: [withDesign],
};


export const Slider2 = () => (
  <>
  <Slider type='range' className='slider'></Slider>
  </>
)

