import divi, { isFloatHundredthZero, getPointIndex } from "./divi.js";

describe("輸入一正整數 n，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
  test.each([
    { input: 1, expected: 5 },
    { input: 2, expected: 6 },
    { input: 3, expected: 1 },
  ])("測試輸入$input，輸出$expected", ({ input, expected }) => {
    expect(divi(input)).toBe(expected);
  });
});
