import React from 'react'
import {MultChoiceFooter, MultChoiceMed, MultChoiceUpload} from './MultipleChoice'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const MultipleChoiceMed = () => (
  <MultChoiceMed>
    <MultChoiceUpload>
    </MultChoiceUpload>
    <MultChoiceFooter>
      Write answers here 

    </MultChoiceFooter>
  </MultChoiceMed>
)