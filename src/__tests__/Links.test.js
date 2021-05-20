import React from 'react'
import {shallow} from 'enzyme'
import {LinkButton} from '../components/TuxComponents/elements/Buttons.stories.js'

it('Should have "This is what all links should look like." as text', () => {
  const wrapper = shallow(<LinkButton />);
  console.log(wrapper.debug())
  const buttonText = wrapper.find('.link-button').text()
  expect(buttonText).toBe('This is what all links should look like.');
});  