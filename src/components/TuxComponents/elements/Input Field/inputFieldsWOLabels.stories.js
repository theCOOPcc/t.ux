import React from "react";
import { Input, Wrapper, Error, ErrorMessage } from "./inputFieldsWOLabels";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Input Fields Without Label",
  decorators: [withDesign],
};

export const InputFields = (args) => (
  <Wrapper {...args}>
    {args.error && <Error {...args} src='/images/ErrorIcon.png' />}
    <Input
      {...args}
      placeholder={
        args.hover === true
          ? "Input Text"
          : args.active === true
          ? "Input Text"
          : args.error === true
          ? "Wrong Input"
          : "Placeholder Text"
      }
    />
      <ErrorMessage {...args}>
        { args.error === true
          ? "Error Message"
          : "Help Text"}
      </ErrorMessage>
  </Wrapper>
);

InputFields.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
InputFields.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
