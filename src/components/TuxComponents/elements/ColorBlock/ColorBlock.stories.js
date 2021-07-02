import React from 'react';
import { ColorBlock } from './ColorBlock';

import { withDesign } from "storybook-addon-designs";

export default {
  title: "ColorBlock",
  decorators: [withDesign], 
};

export const Color_Block = () => (
    <ColorBlock />
);

Color_Block.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "",
      },
    },
  };