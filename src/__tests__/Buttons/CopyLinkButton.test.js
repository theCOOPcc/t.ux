import React from "react";
import { shallow } from "enzyme";
import { CopyLinkButton } from "../../components/TuxComponents/elements/Buttons/Buttons.js";

const wrapper = shallow(<CopyLinkButton />)
console.log(wrapper.debug())

it('should render', () => {
  console.log(wrapper.debug())
  expect(wrapper.find(".copyLinkBtnTest")).toHaveLength(1);
})

it('should have a button', () => {
  let button = wrapper.find(".copyLinkBtnTest");
  expect(button).toHaveLength(1)
})

it('should have an img', () => {
  let image = wrapper.find(".copyLinkBtnTestImg");
  expect(image).toHaveLength(1)
})