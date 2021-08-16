import React from "react";
import { withDesign } from "storybook-addon-designs";
import {
  BarContainer,
  B,
  I,
  Linkicon,
  BrokenLink,
  MobileNav,
  HB,
} from "./Text_toolbar";
import Bicon from "../../../../images/icons/Bicon.svg";
import Iicon from "../../../../images/icons/Iicon.svg";
import LinkIcon from "../../../../images/icons/Link.svg";
import BrokeLink from "../../../../images/icons/BrokenLink.svg";
import mobilenav from "../../../../images/icons/mobilenav.svg";
import BlueB from "../../../../images/icons/BlueB.svg";

export default {
  title: "TextToolBar",
  decorators: [withDesign],
};

export const TextToolBar = (args) => {
  return (
    <>
      <BarContainer>
        <B onMouseOver={e => e.currentTarget.src = BlueB}onMouseOut={e => e.currentTarget.src = Bicon} {...args} src={Bicon}></B>
        <I src={Iicon}></I>
        <Linkicon src={LinkIcon}></Linkicon>
        <BrokenLink src={BrokeLink}></BrokenLink>
        <MobileNav src={mobilenav}></MobileNav>
      </BarContainer>
    </>
  );
};

TextToolBar.args={
  hover: false,
};

TextToolBar.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1252%3A1",
    },
  },
};
