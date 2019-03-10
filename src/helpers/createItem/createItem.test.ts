import createItem from "./createItem";

it("should assign an id to new items", () => {
  const result = createItem({name: "A", value: 50});
  expect(result).toMatchObject({
    id: expect.any(String),
    name: "A",
    value: 50
  });
});