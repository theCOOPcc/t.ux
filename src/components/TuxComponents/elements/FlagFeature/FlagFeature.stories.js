import { withDesign } from "storybook-addon-designs";
import defaultFlag from "../../../../images/icons/defaultFlag.svg";
import hoverFlag from "../../../../images/icons/hoverFlag.svg";
import selectedFlag from "../../../../images/icons/selectedFlag.svg";
import {
  SelectedMenu,
  Option,
  FlagBox,
  FlagText,
  FeatureBox,
} from "./FlagFeature";

export default {
  title: "Flag Feature",
  decorators: [withDesign],
};

export const FlagFeature = (args) => (
  <div {...args}>
    <FlagBox {...args}>
      <img
        src={
          args.active === true
            ? selectedFlag
            : args.hover === true
            ? hoverFlag
            : defaultFlag
        }
        alt="Flag icon"
      />
      <FlagText {...args}>Flag</FlagText>
    </FlagBox>
    {args.active === true ? (
      <SelectedMenu {...args}>
        <p>Reason for Flagging This Question:</p>
        <Option type='first'>Trouble understanding the question</Option>
        <Option>Need more information about the topic</Option>
        <Option>Answer choices don't make sense</Option>
        <Option type="last">Other</Option>
      </SelectedMenu>
    ) : null}
  </div>
);

FlagFeature.args = {
  hover: false,
  active: false,
};

FlagFeature.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=1024%3A387",
    },
  },
};
