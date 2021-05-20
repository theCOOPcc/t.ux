import React from "react";
import {
  GoogleBox,
  GoogleG,
  PrimaryButton,
  SecondaryButton,
  CopyLinkButton,
  BtnNavSml,
  Arrow,
  LinkBtn,
  TextBtn,
} from "./Buttons";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "All Buttons",
  component: GoogleBox,
  decorators: [withDesign], 
};

export const AllButtons = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <BtnNavSml>
      <Arrow src='/images/arrow.svg' />
    </BtnNavSml>
    <br />
    <PrimaryButton>Primary</PrimaryButton>
    <br />
    <SecondaryButton>Secondary</SecondaryButton>
    <br />
    <GoogleBox>
      <GoogleG src='/images/google_logo.png' />
      Sign with Google
    </GoogleBox>
    <br />
    <LinkBtn>This is what all links should look like.</LinkBtn>
    <br />
    <TextBtn>Label</TextBtn>
    <br />
    <CopyLinkButton />
  </div>
);


export const CopyLink = (args) => (
  <>
    <CopyLinkButton {...args} />
  </>
);

CopyLink.args = {
  depressed: false,
};
export const SmallNavButtons = (args) => {
  return (
    <BtnNavSml {...args} className='BtnNavSmall'>
      <Arrow src='/images/arrow.svg' />
    </BtnNavSml>
  );
};
SmallNavButtons.args = {
  depressed: false,
  focus: false,
  hover: false,
  disabled: false,
};
SmallNavButtons.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1424%3A0",
    },
  },
};

export const OAuthButton = (args) => (
  <>
    <GoogleBox {...args}>
      <GoogleG src='/images/google_logo.png' />
      Sign in with Google
    </GoogleBox>
    <GoogleBox disabled='true'>
      <GoogleG src='/images/disabled_g.png' />
      Sign in with Google
    </GoogleBox>
  </>
);

OAuthButton.args = {
  depressed: false,
  focus: false,
  hover: false,
};
OAuthButton.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1012%3A0",
    },
  },
};

export const Primary = (args) => (
  <PrimaryButton {...args}>Primary</PrimaryButton>
);
Primary.args = {
  depressed: false,
  focus: false,
  hover: false,
  small: false,
  large: false,
};
Primary.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1424%3A0",
    },
  },
};
export const Secondary = (args) => (
  <SecondaryButton {...args}>Secondary</SecondaryButton>
);
Secondary.args = {
  depressed: false,
  focus: false,
  hover: false,
  small: false,
  large: false,
};
Secondary.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1424%3A0",
    },
  },
};

export const TextButton = (args) => <TextBtn {...args}>Label</TextBtn>;
TextButton.args = {
  disabled: false,
  focus: false,
  hover: false,
  depressed: false,
};
TextButton.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1424%3A0",
    },
  },
};

export const LinkButton = (args) => (
  <LinkBtn {...args}>This is what all links should look like.</LinkBtn>
);
LinkButton.args = {
  disabled: false,
  focus: false,
  hover: false,
  depressed: false,
};
LinkButton.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1424%3A0",
    },
  },
};
