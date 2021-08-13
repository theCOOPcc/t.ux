import React from "react";
import  { StyledUl, DropDownArrow, DropDownContent, DropDownLi, Input, Label, SubA}  from "./dropdowns";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Dropdown Menu",
  decorators: [withDesign],
};


export const DropdownMenu = (args) => (
  <StyledUl>
        <DropDownLi className="DropdownMenu">
    <Label>Label</Label>
          <Input placeholder="Input Text"/>
            <DropDownArrow {...args} src={
              args.hover ? "/images/dropdown2.png" : "/images/dropdown.png"
            }/>
          <DropDownContent >
            {" "}
            <SubA>Menu Option 1</SubA>
            <SubA>Menu Option 2</SubA>
            <SubA>Menu Option 3</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
);

DropdownMenu.args = {
    hover: false
};
DropdownMenu.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
