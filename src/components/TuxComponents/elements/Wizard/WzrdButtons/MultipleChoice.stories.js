import React from 'react'
import {MultChoiceMed, MultChoiceUpload, CloudImg, AnswerField, TextHead} from './MultipleChoice'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};

export const MultipleChoiceMed = (args) => (
  <MultChoiceMed>
    <MultChoiceUpload {...args}>
      <TextHead {...args}>Upload Image Here</TextHead>
   
    
    </MultChoiceUpload>
    <AnswerField placeholder='Write Anwswer Here ' type='text' />
    
  </MultChoiceMed>
  
)


MultipleChoiceMed.args = {
  pressed: false,
  hover: false,
};
