import { Item, Score } from "../../types";
import { sumBy } from "lodash";

export default function calculateScore(items: Item[]): Score {
  const name = items[0].name;

  let bonus = 0;
  if (name === "A") {
    bonus = Math.floor(items.length / 3) * 50;
  } else if (name === "B") {
    bonus = Math.floor(items.length / 2) * 30;
  }
  
  return {
    bonus,
    totalUnitPoints: sumBy(items, item => item.value)
  };
}