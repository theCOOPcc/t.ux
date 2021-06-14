import React from "react";
import { shallow } from "enzyme";
import Login from "../../components/TuxComponents/layouts/Login";

const wrapper = shallow(<Login />);
console.log(wrapper.debug());

it("should render", () => {
  expect(wrapper.find(".login")).toHaveLength(1);
});

it('Should have "Sign in with Google" as text', () => {
  const pText = wrapper.find(".login").text();
  expect(pText).toBe("Sign in with Google");
});

it("Should redirect to google login", () => {
  const href = wrapper.find(".loginLink").prop("href");
  expect(href).toBe("http://localhost:3001/api/auth/google");
});
