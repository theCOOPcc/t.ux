import React from 'react'
import { ComponentWrapper, PlaceholderImage, AnswerField, FileMessage,ImageContainer } from './DragAndDropPlaceholder';
import ImageUpload from '../../../../../images/ActivityWizardImgs/imageplaceholderSquared.svg'
import ImageUploadDark from '../../../../../images/ActivityWizardImgs/ImagePlaceholderDark.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const ImagePlaceholder = (args) => (
  <>
  <ComponentWrapper {...args}>
    <ImageContainer {...args}>
    <PlaceholderImage {...args} src={ImageUpload} />
    </ImageContainer>
  <FileMessage>Imagenamehere.jpg</FileMessage>
  </ComponentWrapper>
  <AnswerField placeholder='Add Alt Text Here'></AnswerField>
  </>
)

ImagePlaceholder.args = {
  hover: false,
  pressed: false
}