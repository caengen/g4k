import React from "react";
import { shallow } from "enzyme";
import { ItemBoard } from ".";
import { testItems } from "../../testData";

it("renders correctly", () => {
  const wrapper = shallow(<ItemBoard items={testItems} />);
  expect(wrapper).toMatchSnapshot();
});
