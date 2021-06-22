import { ToolTip, Arrow, Box } from './ToolTips.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Tooltips",
  decorators: [withDesign], 
};


export const ToolTips = (args) => (
  <div>     
    <ToolTip {...args}>
      <Box>
        This is a tooltip
      </Box>
      <Arrow {...args} />
    </ToolTip>
    <br/>
    <br/>
    <br/>
    <ToolTip {...args}>
      <Box>
        This is a much longer tooltip for testing
      </Box>
      <Arrow {...args} />
    </ToolTip>
  </div>
)

ToolTips.args = {
  top: false,
  bottom: true,
  left: false,
  right: false
};

ToolTips.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=229%3A2",
    },
  },
};

