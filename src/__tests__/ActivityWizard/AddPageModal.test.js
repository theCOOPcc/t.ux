import React from 'react'
import {shallow} from 'enzyme'
import {AddPageModal} from '../../components/TuxComponents/elements/Wizard/Modals/AddPageModal.stories'


it('should render', () => {
  const wrapper = shallow(<AddPageModal />);
  console.log(wrapper.debug())
  expect(wrapper.find('.addPageModal')).toHaveLength(1)
});