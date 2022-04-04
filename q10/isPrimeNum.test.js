import { isPrimeNum } from "./isPrimeNum";

describe("測試輸入數值 n， 輸入是否為質數", () => {
  test("輸入 0，不是質數", () => {
    expect(isPrimeNum(0)).toBeFalsy();
  });

  test("輸入 1，不是質數", () => {
    expect(isPrimeNum(1)).toBeFalsy();
  });

  test("輸入 9，不是質數", () => {
    expect(isPrimeNum(9)).toBeFalsy();
  });

  test("輸入 2013，不是質數", () => {
    expect(isPrimeNum(2013)).toBeFalsy();
  });

  test("輸入 2，是質數", () => {
    expect(isPrimeNum(2)).toBeTruthy();
  });

  test("輸入 5，是質數", () => {
    expect(isPrimeNum(5)).toBeTruthy();
  });

  test("輸入 37，是質數", () => {
    expect(isPrimeNum(37)).toBeTruthy();
  });

  test("輸入 97，是質數", () => {
    expect(isPrimeNum(37)).toBeTruthy();
  });
});
