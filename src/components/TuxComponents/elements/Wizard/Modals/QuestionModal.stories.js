import React from 'react'
import { QuestionHeader, QuestionModalWrapper, QuestionSubHeader,CreateButton } from './QuestionModal';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

export const QuestionModal = () => (
  <QuestionModalWrapper>
    <QuestionHeader>Question Wizard</QuestionHeader>
    <QuestionSubHeader>
      Which question would you like to add?
    </QuestionSubHeader>
    <CreateButton>Create</CreateButton>
  </QuestionModalWrapper>
)