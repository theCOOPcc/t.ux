import React from "react";
import { withDesign } from "storybook-addon-designs";
import {BarContainer, B} from "./Text_toolbar"
import Bicon from "../../../../images/icons/Bicon.svg"

export default {
    title: "TextToolBar",
    decorators: [withDesign],
  };

  export const TextToolBar = () => {

    return(
        <>
        <BarContainer>
            <B src={Bicon}></B>
        </BarContainer>
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


