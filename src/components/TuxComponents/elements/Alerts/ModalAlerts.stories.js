import React from 'react'
import { ModalAlert, ModalGreen, ModalWhite, ModalWarning, WarningMark, ModalDelete, ModalCancel } from './ModalAlerts'
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal Alert",
  decorators: [withDesign],
};

export const ModalInfo = () => (
  <>
  <ModalAlert>
    <h3 style={{marginLeft: '20px'}}>Title goes here</h3>
    <div style={{width: '500px', marginLeft:'20px'}}>
    <p>A modal dialog displays content that requires user interaction, in a layer above the page.</p>
    </div>
    <ModalWhite>
    <p>
    Label button with clear action
    </p>
    </ModalWhite>
  <ModalGreen>
    <p>
    Label button with clear action
    </p>
  </ModalGreen>
  </ModalAlert>

  <ModalWarning>
    <WarningMark src='./images/yellowWarning.svg' />
    <h3 style={{marginLeft: '72px'}}>Remove student from my list</h3>
    <div style={{marginLeft: '72px', marginRight: '31px'}}>
      <p >T.ux will permanently delete all related information regarding this user.This can't be undone</p>
      
    </div>
    <ModalCancel>
      Cancel
    </ModalCancel>

    <ModalDelete>
      Delete
    </ModalDelete>
  </ModalWarning>
  </>
)