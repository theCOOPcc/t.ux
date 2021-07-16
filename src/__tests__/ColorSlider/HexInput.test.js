import React from 'react'
import {shallow} from 'enzyme'
import { Hex} from '../../components/TuxComponents/elements/ColorSlider/HexInput.stories'


it('should render', () => {
  const wrapper = shallow(<Hex />);
  console.log(wrapper.debug())
  expect(wrapper.find('.hexBox')).toHaveLength(1)
});