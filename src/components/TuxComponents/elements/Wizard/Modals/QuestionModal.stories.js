import React from 'react'
import styled from 'styled-components'

import { QuestionHeader, QuestionModalWrapper, QuestionSubHeader,CreateButton, X_Button, X_Image, TuxFlower } from './QuestionModal';

import {DropdownMenu} from '../../InputField/dropdowns.stories'
import XImage from '../../../../../images/icons/Grey_X.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 155px;
  left: 118px;
  padding: 0;
  margin: 0;
`

export const QuestionModal = (args) => (
  <QuestionModalWrapper className='questionModal'>
    <TuxFlower src='/images/tuxFlower.png' />

    <X_Button>
      <X_Image src={XImage}></X_Image>
    </X_Button>
    <QuestionHeader>Question Wizard</QuestionHeader>
    <QuestionSubHeader>
      Which question would you like to add?
    </QuestionSubHeader>
    <StyledWrapper>
      <DropdownMenu {...args} />
    </StyledWrapper>
    <CreateButton>Create</CreateButton>
  </QuestionModalWrapper>
)

