import divi, { isFloatHundredthZero, getPointIndex } from "./divi.js";

describe("輸入一正整數 n，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
  test("輸入 1，應輸出 5", () => {
    const input = 1;
    const expectOutput = 5;

    expect(divi(input)).toBe(expectOutput);
  });

  test("輸入 2，應輸出 5", () => {
    const input = 2;
    const expectOutput = 5;

    expect(divi(input)).toBe(expectOutput);
  });

  test("輸入 3，應輸出 6", () => {
    const input = 3;
    const expectOutput = 6;

    expect(divi(input)).toBe(expectOutput);
  });
});

describe("測試輸入數字，回傳小數點後兩位是否為 0", () => {
  test.each([
    { input: 0.01, expected: false },
    { input: 1, expected: false },
    { input: 0.011, expected: false },
    { input: 0.001, expected: true },
    { input: 0.0001, expected: true },
  ])("測試輸入$input，輸出$expected", ({ input, expected }) => {
    expect(isFloatHundredthZero(input)).toBe(expected);
  });
});

//! String(1.0) 會自動轉成 String(1)
describe("測試輸入數字，回傳小數點索引值", () => {
  test.each([
    { input: 0.01, expected: 1 },
    // { input: 1.0, exected: 1 },
    { input: 1111.1, expected: 4 },
    { input: 1, expected: -1 },
  ])("測試輸入$input，輸出$expected", ({ input, expected }) => {
    expect(getPointIndex(input)).toBe(expected);
  });
});
