import React from 'react'
import { withDesign } from "storybook-addon-designs";
import { CreatePageBtn } from './CreatePageButton';
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};


export const CreatePage = (args) => (
  <CreatePageBtn {...args} >
    Click here to Create A Page
  </CreatePageBtn>
)

CreatePage.args = {
  pressed: false,
  hover: false,
};
