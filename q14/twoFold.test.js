import { twoFold } from "./twoFold";

describe("細菌實驗中，原有 b 隻細菌，每經過 20 分鐘細菌數量會增加為原來的 2 倍", () => {
  describe("測試輸入原始細菌數(整數)及 20 倍數的分鐘數，輸出細菌繁殖數量", () => {
    test.each([
      { bacteria: 10, minute: 20, expected: 20 },
      { bacteria: 10, minute: 40, expected: 40 },
      { bacteria: 10, minute: 60, expected: 80 },
    ])(
      "測試輸入細菌數$bacteria, $minute，輸出$expected",
      ({ bacteria, minute, expected }) => {
        expect(twoFold(bacteria, minute)).toBe(expected);
      }
    );
  });

  describe("測試輸入原始細菌數(整數)及分鐘數(整數)，未滿 20 分週期則視為此週期未完成繁殖，輸出細菌繁殖數量", () => {
    test.each([
      { bacteria: 10, minute: 30, expected: 20 },
      { bacteria: 10, minute: 50, expected: 40 },
      { bacteria: 10, minute: 70, expected: 80 },
    ])(
      "測試輸入細菌數$bacteria, $minute，輸出$expected",
      ({ bacteria, minute, expected }) => {
        expect(twoFold(bacteria, minute)).toBe(expected);
      }
    );
  });
});
