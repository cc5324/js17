import { divi } from "./divi.js";

describe("輸入數字，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
  describe("輸入整數，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
    test.each([
      { divisor: 3, decimalPlaces: 2, numberInput: 1, expected: 5 },
      { divisor: 3, decimalPlaces: 2, numberInput: 3, expected: 6 },
      { divisor: 3, decimalPlaces: 2, numberInput: -1, expected: 5 },
      { divisor: 3, decimalPlaces: 2, numberInput: -3, expected: 6 },
    ])(
      "測試輸入 $numberInput，輸出 $expected",
      ({ divisor, decimalPlaces, numberInput, expected }) => {
        expect(
          divi({
            divisor,
            decimalPlaces,
            numberInput,
          })
        ).toBe(expected);
      }
    );
  });

  describe("輸入小數，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
    test.each([
      { divisor: 3, decimalPlaces: 2, numberInput: 0, expected: 0 },
      { divisor: 3, decimalPlaces: 2, numberInput: 0.001, expected: 0 },
      { divisor: 3, decimalPlaces: 2, numberInput: 0.2, expected: 4 },
      { divisor: 3, decimalPlaces: 2, numberInput: 0.33, expected: 4 },
    ])(
      "測試輸入 $numberInput，輸出 $expected",
      ({ divisor, decimalPlaces, numberInput, expected }) => {
        expect(
          divi({
            divisor,
            decimalPlaces,
            numberInput,
          })
        ).toBe(expected);
      }
    );
  });

  describe("輸入非數字資料，應報錯", () => {
    test.each([
      { divisor: 3, decimalPlaces: 2, numberInput: "100" },
      { divisor: 3, decimalPlaces: 2, numberInput: "string" },
      { divisor: 3, decimalPlaces: 2, numberInput: [] },
      { divisor: 3, decimalPlaces: 2, numberInput: {} },
    ])(
      "測試輸入 $numberInput 函式應報錯",
      ({ divisor, decimalPlaces, numberInput, expected }) => {
        expect(() =>
          divi({
            divisor,
            decimalPlaces,
            numberInput,
          })
        ).toThrow();
      }
    );
  });
});
