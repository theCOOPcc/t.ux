import React from 'react'
import {shallow} from 'enzyme'
import { CreateTopicModal} from '../../components/TuxComponents/elements/Wizard/Modals/CreateTopicModal.stories'


it('should render', () => {
  const wrapper = shallow(<CreateTopicModal />);
  console.log(wrapper.debug())
  expect(wrapper.find('.createTopic')).toHaveLength(1)
});