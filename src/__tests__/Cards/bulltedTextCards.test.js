import React from 'react';
import { shallow } from 'enzyme';
import { BulletTextCard } from '../../components/TuxComponents/elements/Cards/ContentCards/ContentCards';

const wrapper = shallow(<BulletTextCard />);
console.log(wrapper.debug());

it('should render', () => {
    expect(wrapper.find('.bulletTextCard')).toHaveLength(2);
})