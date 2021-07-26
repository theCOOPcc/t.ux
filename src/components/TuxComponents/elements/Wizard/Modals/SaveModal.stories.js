import React from 'react'
import {SaveModalWrapper, SaveButton, SaveHeader, SaveSubHeader, DontSaveButton, X_Button, X_Image, TuxFlower} from './SaveModal'
import XImage from '../../../../../images/icons/Grey_X.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

export const SaveModal = () => (
  <SaveModalWrapper className='saveModal'>
    <TuxFlower src='/images/tuxFlower.png' />
    <X_Button>
      <X_Image src={XImage}/>
    </X_Button>
    <SaveHeader>Save this Activity</SaveHeader>
    <SaveSubHeader>This activity has not been finished and contains unsaved changes. You can save it as a draft to work on it later.</SaveSubHeader>

    <SaveButton>Save As Draft</SaveButton>
    <DontSaveButton>Don't Save</DontSaveButton>
  </SaveModalWrapper>
)

