import React from 'react'
import {shallow} from 'enzyme'
import {GlobalConfirm, GlobalDeny} from '../../components/TuxComponents/elements/Alerts/GlobalAlerts.stories'

it('should render', () => {
  const wrapper = shallow(<GlobalConfirm />);
  console.log(wrapper.debug())
  expect(wrapper.find('.success-icon')).toHaveLength(1)
});

it('should render', () => {
  const wrapper = shallow(<GlobalDeny />);
  console.log(wrapper.debug())
  expect(wrapper.find('.failure-icon')).toHaveLength(1)
});