import React from "react";
import { shallow } from "enzyme";
import { DropdownMenu } from "../../components/TuxComponents/elements/InputField/dropdowns.stories";

const wrapper = shallow(<DropdownMenu />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".DropdownMenu")).toHaveLength(1);
});
