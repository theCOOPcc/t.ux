import React from "react";
import { shallow } from "enzyme";
import { Secondary } from "../components/TuxComponents/elements/Buttons.stories.js";

const wrapper = shallow(<Secondary />);

it("should render", () => {
  expect(wrapper.find(".secondaryBtnTest")).toHaveLength(1);
});

it('Should have "Secondary" as text', () => {
  const buttonText = wrapper.find(".secondaryBtnTest").text();
  expect(buttonText).toBe("Secondary");
});
