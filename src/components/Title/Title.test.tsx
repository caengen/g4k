import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

it("renders correctly", () => {
  const wrapper = shallow(<Title>Test</Title>);
  expect(wrapper).toMatchSnapshot();
});