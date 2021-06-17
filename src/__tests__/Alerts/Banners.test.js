import React from 'react'
import {shallow} from 'enzyme'
import {InfoBanner, ErrorBanner, WarningBanner} from '../../components/TuxComponents/elements/Alerts/Banners.stories'

it('should render', () => {
  const wrapper = shallow(<InfoBanner />);
  console.log(wrapper.debug())
  expect(wrapper.find('.default-banner')).toHaveLength(1)
});

it('should render', () => {
  const wrapper = shallow(<ErrorBanner />);
  console.log(wrapper.debug())
  expect(wrapper.find('.error-banner')).toHaveLength(1)
});

it('should render', () => {
  const wrapper = shallow(<WarningBanner />);
  console.log(wrapper.debug())
  expect(wrapper.find('.warning-banner')).toHaveLength(1)
});