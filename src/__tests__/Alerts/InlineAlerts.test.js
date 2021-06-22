import React from 'react'
import {shallow} from 'enzyme'
import {AlertDefault, AlertError, AlertSuccess, AlertWarning} from '../../components/TuxComponents/elements/Alerts/InlineAlerts.stories'

it ('should render', () => {
  const wrapper = shallow(<AlertDefault />);
  console.log(wrapper.debug())
 expect(wrapper.find('.default-alert')).toHaveLength(1)
})

it ('should render', () => {
  const wrapper = shallow(<AlertSuccess />);
  console.log(wrapper.debug())
 expect(wrapper.find('.success-alert')).toHaveLength(1)
})

it ('should render', () => {
  const wrapper = shallow(<AlertWarning />);
  console.log(wrapper.debug())
 expect(wrapper.find('.warning-alert')).toHaveLength(1)
})

it ('should render', () => {
  const wrapper = shallow(<AlertError />);
  console.log(wrapper.debug())
 expect(wrapper.find('.error-alert')).toHaveLength(1)
})