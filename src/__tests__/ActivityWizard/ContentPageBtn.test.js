import React from 'react'
import {shallow} from 'enzyme'
import {ContentPageBtn} from '../../components/TuxComponents/elements/Wizard/WzrdButtons/ContentPageButtons.stories'

it('should render', () => {
  const wrapper = shallow(<ContentPageBtn />);
  console.log(wrapper.debug())
  expect(wrapper.find('.content-btn')).toHaveLength(1)
});