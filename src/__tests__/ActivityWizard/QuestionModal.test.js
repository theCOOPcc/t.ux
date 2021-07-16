import React from 'react'
import {shallow} from 'enzyme'
import { QuestionModal} from '../../components/TuxComponents/elements/Wizard/Modals/QuestionModal.stories'


it('should render', () => {
  const wrapper = shallow(<QuestionModal />);
  console.log(wrapper.debug())
  expect(wrapper.find('.questionModal')).toHaveLength(1)
});

