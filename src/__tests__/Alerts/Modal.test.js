import React from 'react'
import {shallow} from 'enzyme'
import {ModalInfo} from '../../components/TuxComponents/elements/Alerts/ModalAlerts.stories'

it ('should render', () => {
  const wrapper = shallow(<ModalInfo />);
  console.log(wrapper.debug())
 expect(wrapper.find('.modal-alert')).toHaveLength(1)
})
it ('should render', () => {
  const wrapper = shallow(<ModalInfo />);
  console.log(wrapper.debug())
 expect(wrapper.find('.modal-warning')).toHaveLength(1)
})