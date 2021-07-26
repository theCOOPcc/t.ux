import React from "react";
import { shallow } from "enzyme";
import { InputFieldsWithLabel } from "../../components/TuxComponents/elements/InputField/inputFieldsWithLabel.stories";

const wrapper = shallow(<InputFieldsWithLabel />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".inputFieldsWithLabel")).toHaveLength(1);
});
