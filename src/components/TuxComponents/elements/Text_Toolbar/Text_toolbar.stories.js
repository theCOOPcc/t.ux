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
import IBlue from "../../../../images/icons/IBlue.svg"
import LinkBlue from "../../../../images/icons/LinkBlue.svg"
import BrokeLinkBlue from "../../../../images/icons/BrokenLinkBlue.svg"
import MobileNavBlue from "../../../../images/icons/MobileNavBlue.svg"

export default {
  title: "TextToolBar",
  decorators: [withDesign],
};



export const TextToolBar = (args) => {
  return (
    <>
      <BarContainer>
        <B  onMouseOver={e => e.currentTarget.src = BlueB}onMouseOut={e => e.currentTarget.src = Bicon} {...args} src={Bicon}></B>
        <I  onMouseOver={e => e.currentTarget.src = IBlue}onMouseOut={e => e.currentTarget.src = Iicon} {...args} src={Iicon} src={Iicon}></I>
        <Linkicon onMouseOver={e => e.currentTarget.src = LinkBlue} onMouseOut={e => e.currentTarget.src = LinkIcon} {...args} src={LinkIcon}></Linkicon>
        <BrokenLink onMouseOver={e => e.currentTarget.src = BrokeLinkBlue} onMouseOut={e => e.currentTarget.src = BrokeLink} {...args} src={BrokeLink}></BrokenLink>
        <MobileNav  onMouseOver={e => e.currentTarget.src = MobileNavBlue} onMouseOut={e => e.currentTarget.src = mobilenav} {...args} src={mobilenav}></MobileNav>
      </BarContainer>
    </>
  );
};

TextToolBar.args={
  hover: false,
  active: false,
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
