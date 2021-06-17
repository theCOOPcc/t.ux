import React from "react";
import { Input, Label, Wrapper } from './newOutlinedInputs'
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Outlined Input",
  decorators: [withDesign],
};

export const OutlinedInput = (args) => (
  <Wrapper>
      <Input placeholder='' type='text' />
      <Label>Label</Label>
  </Wrapper>
);

OutlinedInput.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
OutlinedInput.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
