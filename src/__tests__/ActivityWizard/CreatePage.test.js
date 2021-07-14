import React from 'react'
import {shallow} from 'enzyme'
import {CreatePage} from '../../components/TuxComponents/elements/Wizard/WzrdButtons/CreatePageButton.stories'


it('should render', () => {
  const wrapper = shallow(<CreatePage />);
  console.log(wrapper.debug())
  expect(wrapper.find('.create-page-btn')).toHaveLength(1)
});