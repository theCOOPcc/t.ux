import {CheckboxWrapper, CheckboxContainer, StyledCheckbox, FieldSet, HiddenCheckboxInput, CustomCheckboxInput, TestCustomCheckbox} from './CheckBoxes.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Checkboxes",
  decorators: [withDesign], 
};


export const AllCheckBoxes = (args) => (
<div style={{display: 'flex'}}>        

  <CheckboxWrapper {...args}>
    <HiddenCheckboxInput type='checkbox'/>
    <TestCustomCheckbox  {...args} />
  Label
  </CheckboxWrapper>
  <CheckboxWrapper {...args}>
    <HiddenCheckboxInput type='checkbox'/>
    <TestCustomCheckbox  {...args} />

  </CheckboxWrapper>
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