import calculateScore from "./calculateScore";
import { testItems, testAItems, testBItems, testDItems } from "../../testData";
import { Score } from "../../types";

it("correctly calculates score for a single item", () => {
  const result: Score = calculateScore([testItems[0]]);
  expect(result).toEqual({
    bonus: 0,
    totalUnitPoints: 50
  });
});

it("correctly calculates score for multiple items with no bonus", () => {
  const result: Score = calculateScore(testDItems);
  expect(result).toEqual({
    bonus: 0,
    totalUnitPoints: 45
  });
});

it("correctly applies bonus for A items", () => {
  const result: Score = calculateScore(testAItems);
  expect(result).toEqual({
    bonus: 50,
    totalUnitPoints: 150
  });
});

it("correctly applies bonus for B items", () => {
  const result: Score = calculateScore(testBItems);
  expect(result).toEqual({
    bonus: 30,
    totalUnitPoints: 60
  });
});