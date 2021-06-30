import React from 'react'
import { PlaceholderImg, PlaceholderImgSM, ToolbarImg, ContentBtn, AnswerField,ContentBtnSmall } from './ImageUpload';
import ImageUpload from '../../../../../images/ActivityWizardImgs/imageplaceholder.svg'
import ImageUploadSmall from '../../../../../images/ActivityWizardImgs/ImageSmall.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const PlaceholderImage = (args) => (
  <div>
    <ContentBtn {...args}>
    <PlaceholderImg {...args} src={ImageUpload} /> 
    </ContentBtn>
  <AnswerField placeholder='Write Answer Here ' type='text' />
  </div>
)

export const PlaceholderImageSm = (args) => (
  <>
  <ContentBtnSmall {...args}>
  <PlaceholderImgSM {...args} src={ImageUploadSmall} /> 
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