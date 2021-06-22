import React from 'react'
import { ContentBtn, ButtonHead } from './ContentPageButtons';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const ContentPageBtn = (args) => (
  <ContentBtn>
      <ButtonHead>Name of the page here</ButtonHead>
    <img src='./images/imageplaceholder.svg' /> 
  </ContentBtn>
)