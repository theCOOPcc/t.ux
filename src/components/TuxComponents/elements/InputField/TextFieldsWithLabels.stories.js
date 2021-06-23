import React from "react";
import { Input, Label, Wrapper } from './TextFieldsWithLabels'
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Text Fields With Label",
  decorators: [withDesign],
};

export const TextFieldsWithLabel = (args) => (
  <Wrapper>
      <Input placeholder={
        args.focus === true
          ? "Input Text"
          : args.active === true
          ? "Input Text"
          : args.error === true
          ? "Wrong Input"
          : null
      } type='text' {...args}/>
      <Label>Label</Label>
  </Wrapper>
);

TextFieldsWithLabel.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
TextFieldsWithLabel.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
