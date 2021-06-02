import React from "react";
import { Input, Wrapper, Label, Error, ErrorMessage } from "./inputFields";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Input Fields with Label",
  decorators: [withDesign],
};

export const InputFieldswithLabel = (args) => (
  <Wrapper {...args}>
    {args.error && (
          <Error {...args} src='/images/ErrorIcon.png' />
    )}
    <Input
      {...args}
      placeholder={
        args.focus === true
          ? "Input Text"
          : args.active === true
          ? "Input Text"
          : args.error === true
          ? "Wrong Input"
          : null
      }
    />

    <Label {...args}>Label</Label>
    {args.error &&
    (<ErrorMessage>Error Message</ErrorMessage>)
    }
  </Wrapper>
);



InputFieldswithLabel.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
InputFieldswithLabel.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
