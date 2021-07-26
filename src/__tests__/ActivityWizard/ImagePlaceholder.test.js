import React from 'react'
import {shallow} from 'enzyme'
import {ImagePlaceholder} from '../../components/TuxComponents/elements/Wizard/DragAndDrop/DragAndDropPlaceholder.stories'

it('should render', () => {
  const wrapper = shallow(<ImagePlaceholder />);
  console.log(wrapper.debug())
  expect(wrapper.find('.image-placeholder')).toHaveLength(1)
});