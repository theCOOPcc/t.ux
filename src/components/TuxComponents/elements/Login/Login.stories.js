import React from 'react'
import { GoogleBox, GoogleG } from '../Buttons/Buttons'
import { LoginModal } from './Login'

import { withDesign } from "storybook-addon-designs";

export default {
  title: "Login Signup",
  decorators: [withDesign], 
};

export const LoginSignup = () => (
    <LoginModal />
)

LoginSignup.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/LfcdFdq9xqTv6qTpH2eQJu/GoogleAuth-Login?node-id=2%3A198",
    },
  },
};
