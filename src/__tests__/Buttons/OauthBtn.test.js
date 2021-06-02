import React from 'react';  
import { shallow } from 'enzyme'
import { OAuthButton } from "../../components/TuxComponents/elements/Buttons/Buttons.stories.js";


it('should have "Sign in with Google as text"', () => {
    const wrapper = shallow(<OAuthButton/>)
    const buttonText = wrapper.find('.first').text()
    expect(buttonText).toBe("Sign in with Google");
})