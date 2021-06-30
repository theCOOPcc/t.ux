import React from 'react'
import { Wrapper, ImageButton, ButtonImage } from './Toolbar';

import { withDesign } from "storybook-addon-designs";
export default {
  title: "Toolbar",
  decorators: [withDesign],
};

export const Toolbar = (args) => (
  <>
      <ButtonImage src='../../../../../images/ActivityWizardImgs/TrashPng.png'/>
  <Wrapper>
   
  </Wrapper>
  </>
)

