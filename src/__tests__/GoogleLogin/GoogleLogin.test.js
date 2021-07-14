import React from "react";
import { shallow } from "enzyme";
import { LoginSignup } from "../../components/TuxComponents/elements/Login/Login.stories";

const wrapper = shallow(<LoginSignup />);


it("should render", () => {
  expect(wrapper.find(".LoginBox")).toHaveLength(1);
});
