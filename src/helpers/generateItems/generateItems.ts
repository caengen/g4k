import { createItem } from "..";
import { Item } from "../../types";

const types = [
  {
    name: "A",
    value: 50
  },
  {
    name: "B",
    value: 30
  },
  {
    name: "C",
    value: 20
  },
  {
    name: "D",
    value: 15
  }
];

export default function generateItems(amount: number): Item[] {
  const items = [];
  for (let i = 0; i < amount; i++) {
    const randType = types[Math.floor(Math.random() * types.length)];
    items.push(createItem(randType))
  }

  return items;
};