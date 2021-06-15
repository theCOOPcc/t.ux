import React from "react";
import { shallow } from "enzyme";
import { CompleteLozenge } from "../../components/TuxComponents/elements/Lozenges/Lozenges.js"

const wrapper = shallow(<CompleteLozenge />)

it('shoud render', () => {
    expect(wrapper.find('.completeLozTest')).toHaveLength(1)
})

it('Should have "Complete"  as text', () => {
    const lozengeText = wrapper.find(".completeLozTest").text();
    expect(lozengeText).toBe("Complete");
});
