import React from "react";
import { shallow } from "enzyme";
import { Toggles } from "../../components/TuxComponents/elements/Toggles/Toggles.stories"

const wrapper = shallow(<Toggles/>)
it("should render", () => {
    expect(wrapper.find(".Toggle")).toHaveLength(1)
} )