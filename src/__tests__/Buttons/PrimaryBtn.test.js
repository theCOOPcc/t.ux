import React from "react";
import { shallow } from "enzyme";
import { Primary } from "../../components/TuxComponents/elements/Buttons/Buttons.stories.js";

const wrapper = shallow(<Primary />)

it('should render', () => {
    expect(wrapper.find('.primaryBtnTest')).toHaveLength(1)
})

it('Should have "Primary" as text', () => {
  const buttonText = wrapper.find(".primaryBtnTest").text();
  expect(buttonText).toBe("Primary");
});  