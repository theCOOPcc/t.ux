import React from "react";
import {
  ModalAlert,
  ModalGreenButton,
  ModalWhiteButton,
  ModalWarning,
  WarningMark,
  ModalDeleteButton,
  ModalCancelButton,
} from "./ModalAlerts";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Modal Alert",
  decorators: [withDesign],
};

export const ModalInfo = () => (
  <>
    <ModalAlert className='modal-alert'>
      <h3 style={{ marginLeft: "20px" }}>Title goes here</h3>
      <div style={{ width: "500px", marginLeft: "20px" }}>
        <p>
          A modal dialog displays content that requires user interaction, in a
          layer above the page.
        </p>
      </div>
      <ModalWhiteButton>
        <p>Label button with clear action</p>
      </ModalWhiteButton>
      <ModalGreenButton>
        <p>Label button with clear action</p>
      </ModalGreenButton>
    </ModalAlert>

    <ModalWarning className='modal-warning'>
      <WarningMark src="./images/yellowWarning.svg" />
      <h3 style={{ marginLeft: "72px" }}>Remove student from my list</h3>
      <div style={{ marginLeft: "72px", marginRight: "31px" }}>
        <p>
          T.ux will permanently delete all related information regarding this
          user.This can't be undone
        </p>
      </div>
      <ModalCancelButton>Cancel</ModalCancelButton>

      <ModalDeleteButton>Delete</ModalDeleteButton>
    </ModalWarning>
  </>
);
