/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withDesign } from "storybook-addon-designs";
import { ColorPicker,  SliderWrapper } from './ColorSlider'
export default {
    title: "ColorSliderLib",
    decorators: [withDesign],
  };


export const ColorSliderLib = (args) => (
    
    <SliderWrapper>
    <ColorPicker/>
    </SliderWrapper>  
);


ColorSliderLib.args = {
  };
  
ColorSliderLib.story = {
parameters: {
    design: {
    type: "figma",
    url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
},
};