import React from 'react'
import { PreviewBtn, Wrapper,ButtonText } from './PreviewButton';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};


export const PreviewButton = (args) => (
  <Wrapper {...args}>
    <ButtonText>
  Preview
    </ButtonText>
  </Wrapper>
  
)

PreviewButton.args = {
  pressed: false,
  hover: false,
};
