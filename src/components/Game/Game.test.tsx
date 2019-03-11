import React from "react";
import { shallow } from "enzyme";
import { Game } from ".";
import { testItems } from "../../testData";

it("renders correctly", () => {
  const wrapper = shallow(<Game initialItems={testItems} />);
  expect(wrapper).toMatchSnapshot();
});

it("creates items on construction", () => {
  const wrapper = shallow(<Game />);
  const component = wrapper.instance() as Game;
  expect(component.state.items.length).toBe(Game.ItemAmount);
});

it("creates new items on new game", () => {
  const wrapper = shallow(<Game />);
  const component = wrapper.instance() as Game;
  const oldItems = component.state.items;
  component.startNewGame();
  const newItems = component.state.items;

  expect(oldItems).not.toEqual(newItems);
});

it("sets collected q on collectItem", () => {
  const wrapper = shallow(<Game />);
  const component = wrapper.instance() as Game;
  const oldItem = component.state.items[0];
  component.collectItem(oldItem);
  const newItem = component.state.items[0];

  expect(oldItem.collected).toBe(undefined);
  expect(newItem.collected).toBe(true);
});