import React from 'react'
import {shallow} from 'enzyme'
import { TextButton } from "../../components/TuxComponents/elements/Buttons/Buttons.stories.js";

it('Should have "Text Button" as text', () => {
  const wrapper = shallow(<TextButton />);
  console.log(wrapper.debug())
  const buttonText = wrapper.find('.text-button').text()
  expect(buttonText).toBe('Text Button');
});  