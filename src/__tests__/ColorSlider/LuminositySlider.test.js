import React from 'react'
import {shallow} from 'enzyme'
import { LumSlider} from '../../components/TuxComponents/elements/ColorSlider/LumositySlider.stories'


it('should render', () => {
  const wrapper = shallow(<LumSlider />);
  console.log(wrapper.debug())
  expect(wrapper.find('.lumosity')).toHaveLength(1)
});