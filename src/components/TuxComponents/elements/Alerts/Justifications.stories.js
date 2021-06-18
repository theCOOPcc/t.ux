import React from 'react'

import { IncorrectJust, CorrectJust, AlertIcon, MessageHead, MessageSub } from './Justifications';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Justifications",
  decorators: [withDesign],
};

export const JustIncorrect = () => (
  <IncorrectJust>
    <AlertIcon className='justification-incorrect' src='./images/error.svg' />
    <MessageHead>Not Quite</MessageHead>
    <MessageSub>
      Provide information that clarifies why the selected answer is wrong and a hint to help the user think about the correct answer 
    </MessageSub>
  </IncorrectJust>
)

export const JustCorrect = () => (
  <CorrectJust>
    <AlertIcon className='justification-correct' src='./images/success.svg' />
    <MessageHead>Correct</MessageHead>
    <MessageSub>Provide additional information about the correct answer</MessageSub>
  </CorrectJust>
)