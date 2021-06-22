import React from 'react'
import {shallow} from 'enzyme'
import {PanelNote, ExtendedPanel} from '../../components/TuxComponents/elements/Alerts/Notifications.stories'


it ('should render', () => {
  const wrapper = shallow(<PanelNote />);
  console.log(wrapper.debug())
 expect(wrapper.find('.panel-note')).toHaveLength(1)
})
it ('should render', () => {
  const wrapper = shallow(<ExtendedPanel />);
  console.log(wrapper.debug())
 expect(wrapper.find('.extended-panel')).toHaveLength(1)
})
