import { pickOddItems } from "./pickOdd";

describe("測試輸入陣列，回傳奇數項目的陣列", () => {
  test.each([
    { array: [1, 2, 3], expected: [1, 3] },
    { array: [1], expected: [1] },
    { array: ["a", "b", "c", "d", "e"], expected: ["a", "c", "e"] },
    { array: [], expected: [] },
  ])("測試輸入 $array，輸出 $expected", ({ array, expected }) => {
    expect(pickOddItems(array)).toEqual(expected);
  });
});

describe("測試輸入非陣列資料，應報錯", () => {
  test.each([{ array: 1 }, { array: { number: 1 } }, { array: "string" }])(
    "測試輸入 $array，函式會報錯",
    ({ array }) => {
      expect(() => pickOddItems(array)).toThrow();
    }
  );
});
