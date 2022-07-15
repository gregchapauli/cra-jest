import multiplication from "./multiplication";

test("multiplication de 2 number", () => {
  expect(multiplication(2, 3)).toBe(6);
  expect(typeof multiplication(2, 3)).toBe("number");
  expect(multiplication(2, 3)).toEqual(6);
  expect(multiplication("toto", "tata")).toEqual(
    Error("number expected as parameter")
  );
});
