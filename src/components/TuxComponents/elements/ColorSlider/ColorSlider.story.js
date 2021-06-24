import React from 'react';
import { withDesign } from "storybook-addon-designs";
import { HuePicker } from 'react-color';
import { SliderWrapper } from './ColorSlider'

export default {
  title: "ColorSlider",
  decorators: [withDesign], 
};



export const ColorSlider = (args) => (
    <SliderWrapper>
    <HuePicker />
    </SliderWrapper>
);


ColorSlider.args = {
    hover: false,
  };
  
ColorSlider.story = {
parameters: {
    design: {
    type: "figma",
    url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
},
};