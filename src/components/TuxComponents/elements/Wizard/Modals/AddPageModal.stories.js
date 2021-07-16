import React from 'react'
import styled from 'styled-components'
import {ModalWrapper, ModalHeader, ModalSubHeader, CreateButton, ModalInput, X_Button, X_Image, TuxFlower} from './AddPageModal'
import  { StyledUl, DropDownArrow, DropDownContent, DropDownLi, Input, Label, SubA}  from "../../InputField/dropdowns.stories";
import XImage from '../../../../../images/icons/Grey_X.svg'
import {DropdownMenu} from '../../InputField/dropdowns.stories'
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


export const AddPageModal = (args) => (
  <ModalWrapper className='addPageModal'>
    <TuxFlower src='/images/tuxFlower.png'></TuxFlower>
    <X_Button>
      <X_Image src={XImage} />
    </X_Button>
    <ModalHeader>Add Page</ModalHeader>
    <ModalSubHeader>Which page type would you like to add?</ModalSubHeader>
    <StyledWrapper >
    <DropdownMenu {...args}></DropdownMenu>
    </StyledWrapper>
    <CreateButton>Create</CreateButton>
  </ModalWrapper>
)