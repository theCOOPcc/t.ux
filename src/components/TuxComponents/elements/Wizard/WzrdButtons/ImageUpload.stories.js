import React from 'react'
import { PlaceholderImg, ToolbarImg, ContentBtn, AnswerField } from './ImageUpload';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const PlaceholderImage = (args) => (
  <div>
    <ContentBtn {...args}>
 
    <PlaceholderImg {...args} src='./images/imageplaceholder.svg' /> 
    </ContentBtn>
  <AnswerField placeholder='Write Answer Here ' type='text' />
  </div>
)

PlaceholderImage.args = {
  hover: false,
  pressed: false
}