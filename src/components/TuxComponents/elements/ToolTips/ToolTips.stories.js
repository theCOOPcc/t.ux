import { ToolTip } from './ToolTips.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "ToolTips",
  decorators: [withDesign], 
};

export const ToolTips = (args) => (
  <div style={{margin: '50px 150px 50px'}}>
    <ToolTip
      text='this is a tooltip'
      direction={args.bottom ? 'bottom' : args.top ? 'top' : args.left ? 'left' : args.right ? 'right' : null }
      className='test-class'
    >
      <button>Hover me!</button>
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
