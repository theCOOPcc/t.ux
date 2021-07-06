import React from "react";
import { Input, Wrapper, Label, DropDownArrow, ErrorMessage } from "./dropdownMenuFields";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Dropdown Menu Input Fields",
  decorators: [withDesign],
};

export const DropdownMenuInputFields = (args) => (
  <Wrapper {...args}>
    <DropDownArrow
      {...args}
      src={
        args.disabled ? "/images/disabledDropdown.png" : "/images/dropdown.png"
      }
    />
    <Input
      className='dropdownMenuInputFields'
      aria-label='Select an option'
      {...args}
    >
      <option default>
        {args.focus === true
          ? "Input Text"
          : args.active === true
          ? "Input Text"
          : args.error === true
          ? "Wrong option"
          : ""}
      </option>
      <option>Alpha</option>
    </Input>
    <Label {...args}>Label</Label>
    {args.error && <ErrorMessage>Error Message</ErrorMessage>}
  </Wrapper>
);

DropdownMenuInputFields.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
DropdownMenuInputFields.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
