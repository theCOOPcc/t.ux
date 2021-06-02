import React from "react";
import { shallow } from "enzyme";
import { DropdownMenuInputFields } from "../../components/TuxComponents/elements/InputField/dropdownMenuield.stories";

const wrapper = shallow(<DropdownMenuInputFields />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".dropdownMenuInputFields")).toHaveLength(1);
});
