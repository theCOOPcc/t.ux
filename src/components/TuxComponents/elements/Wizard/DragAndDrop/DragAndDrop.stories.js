import React from 'react'
import { ComponentWrapper,DragBox, SearchFilesBtn, SmallTextField, ImportCloud, CenterMessage, SubMessage, MaxMessage, OrMessage } from './DragAndDrop';
import CloudImageDefault from '../../../../../images/ActivityWizardImgs/CloudDefault.svg'
import CloudImageHover from '../../../../../images/ActivityWizardImgs/CloudHover.svg'
import CloudImagePressed from '../../../../../images/ActivityWizardImgs/CloudPressed.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const DragAndDrop = (args) => (
  <ComponentWrapper className='drag-and-drop'>
  <DragBox>
    <ImportCloud src={
      args.hover === true 
      ? CloudImageHover 
      : args.pressed === true
      ? CloudImagePressed
      : CloudImageDefault } />
    <CenterMessage>Drag & Drop your files here </CenterMessage>
    <SubMessage>Files Supported: JPG, PNG, GIF</SubMessage>
    <OrMessage>or</OrMessage>
    <SearchFilesBtn {...args}>Browse Files</SearchFilesBtn>
    <MaxMessage>Maximum File Size: 2Mb</MaxMessage>
    
  </DragBox>
    <SmallTextField placeholder='Alt Tag Here '>
    </SmallTextField>
  </ComponentWrapper>
)

DragAndDrop.args = {
  pressed: false,
  hover: false,
};
