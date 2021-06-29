import React from 'react'
import { PlaceholderImg, PlaceholderImgSM, ToolbarImg, ContentBtn, AnswerField,ContentBtnSmall } from './ImageUpload';
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

export const PlaceholderImageSm = (args) => (
  <>
  <ContentBtnSmall {...args}>
  <PlaceholderImgSM {...args} src='./images/ImageSmall.svg' /> 
  </ContentBtnSmall>
  <AnswerField placeholder='Write Answer Here ' type='text' />
  </>
)

PlaceholderImage.args = {
  hover: false,
  pressed: false
}
PlaceholderImageSm.args = {
  hover: false,
  pressed: false
}