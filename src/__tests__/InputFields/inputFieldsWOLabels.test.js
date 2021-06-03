import React from "react";
import { shallow } from "enzyme";
import { InputFieldsWithoutLabel } from "../../components/TuxComponents/elements/InputField/inputFieldsWOLabels.stories";

const wrapper = shallow(<InputFieldsWithoutLabel />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".inputFieldsWithoutLabel")).toHaveLength(1);
});

