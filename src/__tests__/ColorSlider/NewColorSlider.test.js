import React from 'react'
import {shallow} from 'enzyme'
import { Slider2} from '../../components/TuxComponents/elements/ColorSlider/NewColorSlider.stories'


it('should render', () => {
  const wrapper = shallow(<Slider2 />);
  console.log(wrapper.debug())
  expect(wrapper.find('.slider')).toHaveLength(1)
});

