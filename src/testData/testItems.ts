import { Item } from "../types";

export const testAItems = [
  {
    id: "1",
    name: "A",
    value: 50
  },
  {
    id: "1a",
    name: "A",
    value: 50
  },
  {
    id: "1b",
    name: "A",
    value: 50
  },
];

export const testBItems = [
  {
    id: "2",
    name: "B",
    value: 30
  },
  {
    id: "2a",
    name: "B",
    value: 30
  }
];

export const testCItems = [
  {
    id: "3",
    name: "C",
    value: 20
  },
  {
    id: "3a",
    name: "C",
    value: 20
  },
  {
    id: "3b",
    name: "C",
    value: 20
  },
];

export const testDItems = [
  {
    id: "4",
    name: "D",
    value: 15
  },
  {
    id: "4a",
    name: "D",
    value: 15
  },
  {
    id: "4b",
    name: "D",
    value: 15
  },
];

export const testItems = [
  ...testAItems,
  ...testBItems,
  ...testCItems,
  ...testDItems
];