import React from "react";
import { withDesign } from "storybook-addon-designs";
import {BarContainer} from "./Text_toolbar"

export default {
    title: "TextToolBar",
    decorators: [withDesign],
  };

  export const TextToolBar = () => {

    return(
        <>
        <BarContainer></BarContainer>
        </>
    )

  }


  TextToolBar.story = {
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1252%3A1",
      },
    },
  };


