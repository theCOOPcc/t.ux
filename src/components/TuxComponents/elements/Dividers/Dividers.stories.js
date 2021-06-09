import React from "react";
import { DottedDivider, SolidDivider } from "./Dividers";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Dividers",
  decorators: [withDesign],
};


export const Dividers = () => (
    <div>
        <DottedDivider/>
        <SolidDivider/>
    </div>
)

Dividers.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=274%3A2413",
      },
    },
  };