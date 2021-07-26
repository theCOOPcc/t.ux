import React from "react";
import { shallow } from "enzyme";
import { Lozenge } from "../../components/TuxComponents/elements/Lozenges/Lozenges.stories";

const wrapper = shallow(<Lozenge />);

it('should render', () => {
    expect(wrapper.find('.lozengesTest')).toHaveLength(1)
})

it('Should have ""  as text', () => {
    const lozengeText = wrapper.find(".lozengesTest").text();
    expect(lozengeText).toBe("");
});
