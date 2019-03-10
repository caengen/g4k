import React from "react";
import { shallow } from "enzyme";
import { Scoreboard } from ".";
import { testItems } from "../../testData";

it("renders correctly", () => {
  const wrapper = shallow(<Scoreboard items={testItems} />);
  expect(wrapper).toMatchSnapshot();
});