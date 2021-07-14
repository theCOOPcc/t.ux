import React from 'react'
import {shallow} from 'enzyme'
import {Toolbar} from '../../components/TuxComponents/elements/Wizard/ToolBar/Toolbar.stories'

it('should render', () => {
  const wrapper = shallow(<Toolbar />);
  console.log(wrapper.debug())
  expect(wrapper.find('.toolbar')).toHaveLength(1)
});