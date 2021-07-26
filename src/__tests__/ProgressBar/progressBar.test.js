import React from "react";
import { shallow } from "enzyme";
import { Progress_Bar } from "../../components/TuxComponents/elements/ProgressBar/ProgressBar.stories"

const wrapper = shallow(<Progress_Bar />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".ProgressBar")).toHaveLength(1);
});