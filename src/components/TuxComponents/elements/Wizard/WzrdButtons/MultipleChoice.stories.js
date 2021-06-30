import React from 'react'
import {MultChoiceMed, MultChoiceUploadMed, MultChoiceUploadSm, CloudImg, AnswerField, TextHead, MultChoiceSm} from './MultipleChoice'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const MultipleChoiceMed = (args) => (
  <MultChoiceMed>
    <MultChoiceUploadMed {...args}>
      <TextHead {...args}>Upload Image Here</TextHead>
    </MultChoiceUploadMed>
    <AnswerField placeholder='Write Anwswer Here ' type='text' />
    
  </MultChoiceMed>
)

export const MultipleChoiceSmall = (args) => (
  <MultChoiceSm {...args}>
    <MultChoiceUploadSm {...args}>
      <TextHead {...args}>Upload Image Here</TextHead>
   
    
    </MultChoiceUploadSm>
    <AnswerField placeholder='Write Anwswer Here ' type='text' />
    
  </MultChoiceSm>
)


MultipleChoiceMed.args = {
  pressed: false,
  hover: false,
};
MultipleChoiceSmall.args = {
  pressed: false,
  hover: false,
};
