import React from "react";
import { shallow } from "enzyme";
import { MultilineInputFields } from "../../components/TuxComponents/elements/InputField/multilineInputFields.stories";

const wrapper = shallow(<MultilineInputFields />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".multilineInputFields")).toHaveLength(1);
});
