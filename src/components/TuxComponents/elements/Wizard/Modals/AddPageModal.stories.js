import React from 'react'
import {ModalWrapper, ModalHeader, ModalSubHeader, CreateButton, ModalInput, DropDownArrow} from './AddPageModal'
import DownArrow from '../../../../../images/ActivityWizardImgs/DropDownArrow.svg'
// import { DropdownMenuInputFields } from '../../InputField/dropdownMenuield.stories';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal",
  decorators: [withDesign],
};


export const AddPageModal = (args) => (
  <ModalWrapper>
    <ModalHeader>Add Page</ModalHeader>
    <ModalSubHeader>Which page type would you like to add?</ModalSubHeader>
  <ModalInput placeholder='Choose page type'></ModalInput>
  <DropDownArrow src={DownArrow}></DropDownArrow>
    <CreateButton>Create</CreateButton>
  </ModalWrapper>
)