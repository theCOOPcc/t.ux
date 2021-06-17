import React from "react";
import { shallow } from "enzyme";
import { LozengeTest } from "../../components/TuxComponents/elements/Lozenges/Lozenges.stories"

const wrapper = shallow(<LozengeTest />)

it('shoud render', () => {
    expect(wrapper.find('.lozengesTest')).toHaveLength(1)
})

it('Should have ""  as text', () => {
    const lozengeText = wrapper.find(".lozengesTest").text();
    expect(lozengeText).toBe("");
});


