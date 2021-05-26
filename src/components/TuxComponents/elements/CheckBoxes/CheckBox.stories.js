import {Label, CheckboxContainer, StyledCheckbox, FieldSet, HiddenCheckboxInput, CustomCheckboxInput} from './CheckBoxes.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "CheckBox",
  component: Label,
  decorators: [withDesign], 
};


export const AllCheckBoxes = (args) => (
<div style={{display: 'flex'}}>        
  <Label {...args} >
    <HiddenCheckboxInput type='checkbox' />
    <CustomCheckboxInput {...args}  />
    Label
  </Label>
  <Label {...args} >
    <HiddenCheckboxInput type='checkbox' />
    <CustomCheckboxInput {...args}  />
  </Label>
</div>
)

AllCheckBoxes.args = {
  hover: false,
  focus: false,
  checked: false,
  disabled: false,
  error: false,
  intermediate: false
}

AllCheckBoxes.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
}