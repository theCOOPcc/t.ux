import React from "react";
import { shallow } from "enzyme";
import { SmallNavButtons } from "../components/TuxComponents/elements/Buttons.stories.js";

it("should render", () => {
  const wrapper = shallow(<SmallNavButtons />);
  expect(wrapper.find('.BtnNavSmall')).toHaveLength(1);
});