import React from 'react'
import {ModalWrapper, ModalHeader, ModalSubHeader, CreateButton} from './Modal'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Inline Alerts",
  decorators: [withDesign],
};


export const Modal = (args) => (
  <ModalWrapper>
    <ModalHeader>Add Page</ModalHeader>
    <ModalSubHeader>Which page type would you like to add?</ModalSubHeader>
  </ModalWrapper>

)