import React from 'react';
import { withDesign } from "storybook-addon-designs";
import { SliderWrapper, ColorPicker, LuminositySlider } from './ColorSlider'

export default {
    title: "ColorSlider",
    decorators: [withDesign],
  };


export const ColorSlider = (args) => (
    <SliderWrapper >
    <ColorPicker type="color" id="color"/>
    <LuminositySlider type="range" min="0" max="255" step="1" className="luminosity"/>
    </SliderWrapper>
);


ColorSlider.args = {
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