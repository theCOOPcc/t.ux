import React from 'react'
import { Wrapper, ImageButtonTrash, ImageButtonEdit,ImageButtonDownload, ButtonImageTrash,ButtonImageEdit,ButtonImageDownload } from './Toolbar';
import Trash from '../../../../../images/ActivityWizardImgs/Trash.svg'
import Edit from '../../../../../images/ActivityWizardImgs/Edit.svg'
import Download from '../../../../../images/ActivityWizardImgs/Download.svg'

import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const Toolbar = (args) => (
  <>
  <Wrapper>
    <ImageButtonTrash className='toolbar' {...args}>
      <ButtonImageTrash {...args} src={Trash} />
    </ImageButtonTrash>

    <ImageButtonEdit {...args}>
      <ButtonImageEdit {...args} src={Edit} />
    </ImageButtonEdit>

    <ImageButtonDownload {...args}>
      <ButtonImageDownload {...args} src={Download} />
    </ImageButtonDownload>

  </Wrapper>
  </>
)

Toolbar.args = {
  hover: false,
  pressed: false,
}

