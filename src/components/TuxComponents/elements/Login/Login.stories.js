import React from 'react'
import { GoogleBox, GoogleG } from '../Buttons/Buttons'
import { TuxFlower, LoginBox, P } from './Login'

import { withDesign } from "storybook-addon-designs";

export default {
  title: "Login Signup",
  decorators: [withDesign], 
};

export const LoginSignup = () => (
    <div>
    <LoginBox className='LoginBox'>
    <TuxFlower src='/images/tuxFlower.png'/>
    <P>Welcome to t.ux!</P>
        <GoogleBox>
            <GoogleG src='/images/google_logo.png'/>
            Sign in with Google
        </GoogleBox>
    </LoginBox>
    </div>
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
