import React from 'react'
import {shallow} from 'enzyme'
import {BannerWideSuccess, BannerWideError} from '../../components/TuxComponents/elements/Alerts/Banners-Wide.stories'

it('should render', () => {
  const wrapper = shallow(<BannerWideSuccess />);
  console.log(wrapper.debug())
  expect(wrapper.find('.wide-success')).toHaveLength(1)
});
it('should render', () => {
  const wrapper = shallow(<BannerWideError />);
  console.log(wrapper.debug())
  expect(wrapper.find('.wide-error')).toHaveLength(1)
});