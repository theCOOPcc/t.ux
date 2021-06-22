import React from 'react';
import { shallow } from 'enzyme';
import { AnswerCard } from '../../components/TuxComponents/elements/Cards/AnswerCards/AnswerCards';

const wrapper = shallow(<AnswerCard />);
console.log(wrapper.debug());

it('should render', () => {
    expect(wrapper.find('.answerCard')).toHaveLength(1);
})