import React from 'react'
import {shallow} from 'enzyme'
import {TextButton} from '../components/TuxComponents/elements/Buttons.stories.js'

it('Should have Label inside text', () => {
  const wrapper = shallow(<TextButton />);
  const buttonText = wrapper.find('.first').text()
  expect(buttonText).toBe("Text Button");
});