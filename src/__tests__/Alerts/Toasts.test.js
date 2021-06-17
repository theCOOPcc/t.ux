import React from 'react'
import {shallow} from 'enzyme'
import {ToastSuccess, ToastError} from '../../components/TuxComponents/elements/Alerts/Toasts.stories'

it('should render', () => {
  const wrapper = shallow(<ToastSuccess />);
  console.log(wrapper.debug())
  expect(wrapper.find('.toast-success')).toHaveLength(1)
});
it('should render', () => {
  const wrapper = shallow(<ToastError />);
  console.log(wrapper.debug())
  expect(wrapper.find('.toast-error')).toHaveLength(1)
});
