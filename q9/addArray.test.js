import { addTwoArrayItems } from "./addArray";

describe("測試輸入兩個陣列，將兩個陣列對應項目相加並回傳", () => {
  test.each([
    { arr1: [0, 0, 0], arr2: [1, 2, 3], expected: [1, 2, 3] },
    { arr1: [1], arr2: [1, 3, 4], expected: [2, 3, 4] },
    { arr1: [], arr2: [1, 3, 4], expected: [1, 3, 4] },
  ])("測試輸入$arr1, $arr2，輸出$expected)", ({ arr1, arr2, expected }) => {
    expect(addTwoArrayItems(arr1, arr2)).toEqual(expected);
  });
});
