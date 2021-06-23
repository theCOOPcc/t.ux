import { ToolTip, Arrow, Box } from './ToolTips.js'
import React from 'react';
import { withDesign } from "storybook-addon-designs";

export default {
  title: "ToolTips",
  decorators: [withDesign], 
};

export const ToolTips = (args) => (
  //toggle display
  // <div style={{float: 'left'}}>     
  //   <ToolTip {...args}>
  //     <Box className="test-class">
  //       This is a tooltip
  //     </Box>
  //     <Arrow {...args} />
  //   </ToolTip>
  // </div>

  //sequential display
  <div style={{float: 'left'}}>
    <ToolTip top={true}>
      <Box className="test-class">
        This is a tooltip
      </Box>
      <Arrow top={true} />
    </ToolTip>
    <br/>
    <ToolTip left={true}>
      <Box>
        This is a tooltip
      </Box>
      <Arrow left={true} />
    </ToolTip>
    <br/>
    <ToolTip bottom={true}>
      <Box>
        This is a tooltip
      </Box>
      <Arrow bottom={true} />
    </ToolTip>
    <br/>
    <ToolTip right={true}>
      <Box>
        This is a tooltip
      </Box>
      <Arrow right={true} />
    </ToolTip>
  </div>
)

// ToolTips.args = {
//   top: false,
//   bottom: true,
//   left: false,
//   right: false
// };

ToolTips.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=229%3A2",
    },
  },
};
