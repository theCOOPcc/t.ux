import React from "react";
import { Lozenges } from "./Lozenges";
import { withDesign } from "storybook-addon-designs";
export default {
  title: "Lozenge",
  decorators: [withDesign],
};
export const Lozenge = (args) => (
  <Lozenges {...args} className='lozengesTest'>
    <p>
      {args.complete === true
        ? "Complete"
        : args.progress === true
        ? "In Progress"
        : args.notStarted === true
        ? "- Not Yet Started -"
        : ""}
    </p>
  </Lozenges>
);
Lozenge.args = {
  complete: false,
  progress: false,
  notStarted: false,
};
Lozenge.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=274%3A2390",
    },
  },
};