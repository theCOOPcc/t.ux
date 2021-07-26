import React from 'react'
import {shallow} from 'enzyme'
import {MultipleChoiceMed, MultipleChoiceSmall} from '../../components/TuxComponents/elements/Wizard/WzrdButtons/MultipleChoice.stories'

it('should render', () => {
  const wrapper = shallow(<MultipleChoiceMed />);
  console.log(wrapper.debug())
  expect(wrapper.find('.multiple-choice-med-btn')).toHaveLength(1)
});
it('should render', () => {
  const wrapper = shallow(<MultipleChoiceSmall />);
  console.log(wrapper.debug())
  expect(wrapper.find('.multiple-choice-Sm-btn')).toHaveLength(1)
});