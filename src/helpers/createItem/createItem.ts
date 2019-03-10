import uuidv4 from "uuid";
import { Item } from "../../types";

interface CreateItemParams {
  name: string;
  value: number;
}

export default function createItem(params: CreateItemParams): Item {
  return {
    id: uuidv4(),
    ...params
  }
}