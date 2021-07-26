import React from "react";
import { shallow } from "enzyme";
import { Dividers } from "../../components/TuxComponents/elements/Dividers/Dividers.stories";

const wrapper = shallow(<Dividers />);
console.log(wrapper.debug());

it("should render", () => {
    expect(wrapper.find(".dottedDivider")).toHaveLength(1);
  });

it("should render", () => {
    expect(wrapper.find(".solidDivider")).toHaveLength(1);
  });
  