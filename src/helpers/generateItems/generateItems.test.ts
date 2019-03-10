import generateItems from "./generateItems";

it("generates correct amount of items", () => {
  const items = generateItems(10);
  expect(items.length).toBe(10);
});

it("generates items correctly", () => {
  const item = generateItems(1);

  expect(item[0]).toMatchObject({
    id: expect.any(String),
    name: expect.stringMatching(/A|B|C|D/),
    value: expect.any(Number)
  });
});