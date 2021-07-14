import React from "react";
import { shallow } from "enzyme";
import {
  BlurBackground,
  BackgroundPage,
  GradientBackground,
  MainColumn,
} from "../../components/TuxComponents/elements/PageBackgrounds/PageBackground.stories";

const wrapper = shallow(<BlurBackground />);
const wrapper1 = shallow(<BackgroundPage />);
const wrapper2 = shallow(<GradientBackground />);
const wrapper3 = shallow(<MainColumn />);

it("Blur background should render", () => {
  expect(wrapper.find(".blur")).toHaveLength(1);
});

it("Page Background should render", () => {
  expect(wrapper1.find(".pageBackground")).toHaveLength(1);
});

it("Gradient Background should render", () => {
  expect(wrapper2.find(".gradient")).toHaveLength(1);
});

it("Main Column should render", () => {
  expect(wrapper3.find(".main")).toHaveLength(1);
});
