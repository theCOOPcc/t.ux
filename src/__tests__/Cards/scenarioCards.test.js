import React from 'react';
import { shallow } from 'enzyme';
import { ScenarioCard } from '../../components/TuxComponents/elements/Cards/ContentCards/ContentCards';

const wrapper = shallow(<ScenarioCard />);
console.log(wrapper.debug());

it('should render', () => {
    expect(wrapper.find('.scenarioCard')).toHaveLength(3);
});