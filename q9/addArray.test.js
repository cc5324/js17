import { addTwoArrayItems, addTwoDiffArrayItems } from "./addArray";

describe("測試輸入兩個長度相同的陣列，將兩個陣列對應項目相加並回傳", () => {
  test.each([
    { array1: [0, 0, 0], array2: [1, 2, 3], expected: [1, 2, 3] },
    { array1: [1, 1, 1], array2: [1, 2, 3], expected: [2, 3, 4] },
    { array1: [1], array2: [4], expected: [5] },
  ])(
    "測試輸入$array1, $array2，輸出$expected)",
    ({ array1, array2, expected }) => {
      expect(addTwoArrayItems(array1, array2)).toEqual(expected);
    }
  );
});

describe("測試輸入兩個長度可不同的陣列，將兩個陣列對應項目相加並回傳", () => {
  test.each([
    { array1: [0, 0, 0], array2: [1, 2, 3], expected: [1, 2, 3] },
    { array1: [1], array2: [1, 3, 4], expected: [2, 3, 4] },
    { array1: [], array2: [1, 3, 4], expected: [1, 3, 4] },
  ])(
    "測試輸入$array1, $array2，輸出$expected)",
    ({ array1, array2, expected }) => {
      expect(addTwoDiffArrayItems(array1, array2)).toEqual(expected);
    }
  );
});
