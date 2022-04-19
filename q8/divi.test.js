import { divi } from "./divi.js";

describe("輸入數字，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
  const divi3 = divi({
    divisor: 3,
    decimalPlaces: 2,
    decimalPlacesNumber: 0,
  });
  describe("輸入整數，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
    test.each([
      { input: 1, expected: 5 },
      { input: 3, expected: 6 },
      { input: -1, expected: 5 },
      { input: -3, expected: 6 },
    ])("測試輸入 $input，輸出 $expected", ({ input, expected }) => {
      expect(divi3(input)).toBe(expected);
    });
  });

  describe("輸入小數，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
    test.each([
      { input: 0.001, expected: 0 },
      { input: 0.2, expected: 0 },
      { input: 0, expected: 0 },
      { input: 0.33, expected: 4 },
    ])("測試輸入 $input，輸出 $expected", ({ input, expected }) => {
      expect(divi3(input)).toBe(expected);
    });
  });
});
