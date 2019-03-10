import React from "react";
import { ItemCard } from ".";
import { testItems } from "../../testData";
import { shallow } from "enzyme";

describe("ItemCard", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ItemCard item={testItems[0]} />)
    expect(wrapper).toMatchSnapshot();
  })
});