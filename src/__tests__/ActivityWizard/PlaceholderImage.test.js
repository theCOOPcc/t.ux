import React from 'react'
import {shallow} from 'enzyme'
import {PlaceholderImage,PlaceholderImageSm} from '../../components/TuxComponents/elements/Wizard/WzrdButtons/ImageUpload.stories'

it('should render', () => {
  const wrapper = shallow(<PlaceholderImage />);
  console.log(wrapper.debug())
  expect(wrapper.find('.placeholder-img')).toHaveLength(1)
});
it('should render', () => {
  const wrapper = shallow(<PlaceholderImageSm />);
  console.log(wrapper.debug())
  expect(wrapper.find('.placeholder-img-sm')).toHaveLength(1)
});

