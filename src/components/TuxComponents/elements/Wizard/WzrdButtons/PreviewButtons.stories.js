import React from 'react'
import { PreviewBtn, Wrapper } from './PreviewButton';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};


export const PreviewButton = (args) => (
  <Wrapper {...args}>
    <PreviewBtn {...args} src='./images/PreviewEye.svg' />
  Preview
  </Wrapper>
  
)

PreviewButton.args = {
  pressed: false,
  hover: false,
};
