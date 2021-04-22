import React from 'react';
import { Button280, Button350, LoginBtn, MedBtn, DisabledBtn, Button, GoogleBox, GoogleG  } from "./Buttons";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "All Buttons",
  component: Button280,
  decorators: [withDesign],
};

export const AllButtons = () => (
  <>
    <GoogleBox>
        <GoogleG src='/images/google_logo.png' />
        Sign with Google
    </GoogleBox>
    <Button>Default Button</Button>
    <Button280>Button280</Button280>
    <Button350>Button350</Button350>
    <LoginBtn>Login Button</LoginBtn>
    <MedBtn>MedBtn</MedBtn>
    <DisabledBtn>DisabledBtn</DisabledBtn>
  </>
);


// storiesOf("Default").add("With Figma", (args) => (
//   <WithFigma
//     url={
//       "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=228%3A12"
//     }
//   >
//     <Button {...args}>Karens Button</Button>
//   </WithFigma>
// ));

export const Default = (args) =>
  <Button {...args}>Karens Button</Button> 
  
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
export const Google = (args) => (
  <GoogleBox {...args}>
    <GoogleG src='/images/google_logo.png' />
    Sign in with Google
  </GoogleBox>
);

Google.args = {
  disabled: false,
  depressed: false,
  focus: false,
  hover: false,
};
Google.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=1012%3A0",
    },
  },
};


export const Btn280 = () => <Button280>Button280</Button280>;

export const Btn350 = () => <Button350>Button350</Button350>

export const BtnLogin = () => <LoginBtn>LoginBtn</LoginBtn>;

export const BtnMed = () => <MedBtn>MedBtn</MedBtn>;

export const Btndisabled = () => <DisabledBtn>DisabledBtn</DisabledBtn>;


