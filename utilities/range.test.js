import { TestWatcher } from "@jest/core";
import { range } from "./range";

describe("測試輸入起始數值、結束數值、間隔，會生成起始數直到結束數值間的數字陣列", () => {
  test.each([
    { start: 0, end: 3, numberArray: [0, 1, 2, 3] },
    { start: 2, end: 6, numberArray: [2, 3, 4, 5, 6] },
  ])(
    "輸入起始值$start、結束值$end，間隔預設為 1，生成$numberArray",
    ({ start, end, numberArray }) => {
      expect(range(start, end)).toEqual(numberArray);
    }
  );

  test.each([
    { start: 0, end: 3, step: 1, numberArray: [0, 1, 2, 3] },
    { start: 1, end: 3, step: 1, numberArray: [1, 2, 3] },
    { start: 0, end: 6, step: 2, numberArray: [0, 2, 4, 6] },
    { start: 0, end: -3, step: -1, numberArray: [0, -1, -2, -3] },
  ])(
    "輸入起始值$start、結束值$end、間隔$step，生成$numberArray",
    ({ start, end, step, numberArray }) => {
      expect(range(start, end, step)).toEqual(numberArray);
    }
  );

  test.each([
    { start: 0, end: 3, step: -1, numberArray: [0, 1, 2, 3] },
    { start: 0, end: -3, step: 1, numberArray: [0, -1, -2, -3] },
  ])(
    "輸入起始值$start、結束值$end、間隔$step，範圍無效應報錯",
    ({ start, end, step }) => {
      expect(() => range(start, end, step)).toThrow();
    }
  );
});
