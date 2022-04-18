import { collectMultiples } from "./collectMultiples.js";

describe("測試輸入兩個陣列，將兩個陣列對應項目相加並回傳", () => {
  test.each([
    {
      number: 10,
      topLimit: 100,
      expected: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    { number: 50, topLimit: 100, expected: [50, 100] },
    { number: 33, topLimit: 100, expected: [33, 66, 99] },
    { number: 99, topLimit: 100, expected: [99] },
  ])(
    "測試輸入{number: $number, topLimit: $topLimit}，輸出$expected",
    ({ number, topLimit, expected }) => {
      expect(collectMultiples({ number, topLimit })).toEqual(expected);
    }
  );
});
