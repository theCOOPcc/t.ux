import React from 'react'
import {shallow} from 'enzyme'
import { SaveModal} from '../../components/TuxComponents/elements/Wizard/Modals/SaveModal.stories'

it('should render', () => {
  const wrapper = shallow(<SaveModal />);
  console.log(wrapper.debug())
  expect(wrapper.find('.saveModal')).toHaveLength(1)
});

