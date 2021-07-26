import React from 'react'
import { CreatePageBtn, ButtonHead, PlusSign } from './CreatePageButton';
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Activity Wizard",
  decorators: [withDesign],
};


export const CreatePage = (args) => (
  <CreatePageBtn className='create-page-btn' {...args}  >
    <ButtonHead>
    Click here to Create A Page
    </ButtonHead>
  </CreatePageBtn>
)

CreatePage.args = {
  pressed: false,
  hover: false,
};
