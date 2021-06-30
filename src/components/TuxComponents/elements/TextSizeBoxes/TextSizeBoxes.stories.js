import React from "react";
import { withDesign } from "storybook-addon-designs";
import { TextSizeBox } from './TextSizeBoxes';

export default {
  title: "TextSizeBoxes",
  decorators: [withDesign],
};

export const TextSizeBoxes = (args) => (
  <TextSizeBox />
)

// TextSizeBoxes.args = {

// }


TextSizeBoxes.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=525%3A2867",
    },
  },
};