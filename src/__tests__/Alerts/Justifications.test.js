import React from 'react'
import {shallow} from 'enzyme'
import {JustIncorrect, JustCorrect} from '../../components/TuxComponents/elements/Alerts/Justifications.stories'

it ('should render', () => {
  const wrapper = shallow(<JustIncorrect />);
  console.log(wrapper.debug())
 expect(wrapper.find('.justification-incorrect')).toHaveLength(1)
})
it ('should render', () => {
  const wrapper = shallow(<JustCorrect />);
  console.log(wrapper.debug())
 expect(wrapper.find('.justification-correct')).toHaveLength(1)
})
