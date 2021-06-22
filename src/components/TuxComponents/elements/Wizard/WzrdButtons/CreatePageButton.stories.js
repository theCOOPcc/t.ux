import React from 'react'
import { withDesign } from "storybook-addon-designs";
import { CreatePageBtn, ButtonHead } from './CreatePageButton';
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};


export const CreatePage = (args) => (
  <CreatePageBtn {...args} >
    <ButtonHead>
    Click here to Create A Page
    </ButtonHead>
  </CreatePageBtn>
)

CreatePage.args = {
  pressed: false,
  hover: false,
};
