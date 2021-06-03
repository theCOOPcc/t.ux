import React from 'react'
import {HiddenRadioButtonInput, RadioButtonWrapper, TestCustomRadio} from './RadioButtons'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Radio Buttons",
  decorators: [withDesign], 
};

export const AllRadioButtons = (args) => (
  <div style={{display: 'flex'}}>
    <RadioButtonWrapper {...args} >
    <HiddenRadioButtonInput type='radio' {...args} />
    <TestCustomRadio {...args} />
    Label
    </RadioButtonWrapper>
  </div>
)

AllRadioButtons.args = {
  hover: false,
  focus: false,
  checked: false,
  disabled: false,
  error: false,
}

AllRadioButtons.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
}