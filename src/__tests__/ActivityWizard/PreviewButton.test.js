import React from 'react'
import {shallow} from 'enzyme'
import {PreviewButton} from '../../components/TuxComponents/elements/Wizard/WzrdButtons/PreviewButtons.stories'

it('should render', () => {
  const wrapper = shallow(<PreviewButton />);
  console.log(wrapper.debug())
  expect(wrapper.find('.preview-btn')).toHaveLength(1)
});