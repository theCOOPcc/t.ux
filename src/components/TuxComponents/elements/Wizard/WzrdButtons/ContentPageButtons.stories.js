import React from 'react'
import { ContentBtn, ButtonHead, PlaceholderImg, ToolbarImg } from './ContentPageButtons';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const ContentPageBtn = (args) => (
  <ContentBtn {...args} >
      <ButtonHead {...args} >
        Name of the page here
        </ButtonHead>
    <PlaceholderImg {...args} src='./images/imageplaceholder.svg' /> 
  </ContentBtn>
)
  
ContentPageBtn.args = {
  pressed: false,
  hover: false,
};
