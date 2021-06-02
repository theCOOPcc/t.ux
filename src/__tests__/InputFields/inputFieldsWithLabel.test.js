import React from "react";
import { shallow } from "enzyme";
import { InputFieldswithLabel } from "../../components/TuxComponents/elements/InputField/inputFieldsWithLabel.stories";

const wrapper = shallow(<InputFieldswithLabel />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".inputFieldsWithLabel")).toHaveLength(1);
});
