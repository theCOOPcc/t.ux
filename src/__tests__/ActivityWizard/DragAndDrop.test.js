import React from 'react'
import {shallow} from 'enzyme'
import {DragAndDrop} from '../../components/TuxComponents/elements/Wizard/DragAndDrop/DragAndDrop.stories'


it('should render', () => {
  const wrapper = shallow(<DragAndDrop />);
  console.log(wrapper.debug())
  expect(wrapper.find('.drag-and-drop')).toHaveLength(1)
});