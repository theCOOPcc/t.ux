import React from 'react'
import styled from 'styled-components'
import { CreateTopicMod, CreateTopicHeader, CreateTopicSubHeader, CreateButton, X_Button, X_Image, TuxFlower } from './CreateTopicModal';
import { InputFieldsWithLabel } from '../../InputField/inputFieldsWithLabel.stories';
import XImage from '../../../../../images/icons/Grey_X.svg'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 208.37px;
  left: 73px;
  padding: 0;
  margin: 0;
  `

export const CreateTopicModal = (args) => (
  <CreateTopicMod className='createTopic'>
    <TuxFlower src='/images/tuxFlower.png' />
    <X_Button>
      <X_Image src={XImage} />
    </X_Button>
    <CreateTopicHeader>Create A Topic</CreateTopicHeader>
    <CreateTopicSubHeader>Type the Name of the Topic Below</CreateTopicSubHeader>
    <StyledWrapper>
    <InputFieldsWithLabel {...args}></InputFieldsWithLabel>
    </StyledWrapper>
    <CreateButton>Create</CreateButton>
  </CreateTopicMod>
)

