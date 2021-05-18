import React from "react";
import {
	Button280,
	Button350,
	LoginBtn,
	MedBtn,
	DisabledBtn,
	Button,
	GoogleBox,
	GoogleG,
	PrimaryButton,
	SecondaryButton,
  CopyLinkButton,
	CopyLinkBtn,
	CopyLinkImg,
	CopyLinkDiv,
	CopyLinkP, BtnNavSml, Arrow
} from "./Buttons";
import { withDesign } from "storybook-addon-designs";



export default {
	title: "All Buttons",
	component: Button280,
	decorators: [withDesign],
};

export const AllButtons = () => (
	<>
     <BtnNavSml>
      <Arrow src='/images/arrow.svg' />
    </BtnNavSml>
		<PrimaryButton>Primary</PrimaryButton>
		<SecondaryButton>Secondary</SecondaryButton>
		<GoogleBox>
			<GoogleG src="/images/google_logo.png" />
			Sign with Google
		</GoogleBox>
		<Button>Default Button</Button>
		<Button280>Button280</Button280>
		<Button350>Button350</Button350>
		<LoginBtn>Login Button</LoginBtn>
		<MedBtn>MedBtn</MedBtn>
		<DisabledBtn>DisabledBtn</DisabledBtn>
    <CopyLinkButton />
	</>
);

export const Default = (args) => <Button {...args}>Default Button 1</Button>;

Default.args = {
	disabled: true,
	depressed: true,
	focus: false,
};
Default.story = {
	parameters: {
		design: {
			type: "figma",
			url:
				"https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1012%3A0",
		},
	},
};

export const CopyLink = (args) => (
  <>
	<CopyLinkButton {...args} />
  </>
);

CopyLink.args = {
	depressed: false,
}
export const SmallNavButtons = (args) => {
  return (<BtnNavSml {...args}>
      <Arrow src='/images/arrow.svg' />
    </BtnNavSml>
  )
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
  <GoogleBox disabled="true" >
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

