import {CheckboxWrapper, HiddenCheckboxInput,  TestCustomCheckbox} from './CheckBoxes.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Checkboxes",
  decorators: [withDesign], 
};


export const Checkboxes = (args) => (
<div style={{display: 'flex'}}>        
  <CheckboxWrapper style={{paddingRight: '3px'}} {...args}>
    <HiddenCheckboxInput type='checkbox'/>
    <TestCustomCheckbox style={{marginRight:'10px'}}  {...args} />
  Label
  </CheckboxWrapper>
  <CheckboxWrapper {...args}>
    <HiddenCheckboxInput type='checkbox'/>
    <TestCustomCheckbox  {...args} />
  </CheckboxWrapper>
</div>
)

Checkboxes.args = {
  hover: false,
  focus: false,
  checked: false,
  disabled: false,
  error: false,
  intermediate: false,
};

Checkboxes.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
};