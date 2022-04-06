import { checkPatternInput, checkDirectionInput } from "./checkChoiceInput";

describe("測驗輸入不為 arrow 或 heart 應報錯", () => {
  test("輸入 arrow，應通過", () => {
    expect(checkPatternInput("arrow")).toBeFalsy();
  });

  test("輸入 heart，應通過", () => {
    expect(checkPatternInput("heart")).toBeFalsy();
  });

  test("輸入 hea，應報錯", () => {
    expect(() => checkPatternInput("hea")).toThrow();
  });

  test("輸入 愛心，應報錯", () => {
    expect(() => checkPatternInput("hea")).toThrow();
  });

  test("輸入空白，應報錯", () => {
    expect(() => checkPatternInput(" ")).toThrow();
  });
});

describe("測驗輸入不為 up / down / left / right 其一應報錯", () => {
  test("輸入 up，應通過", () => {
    expect(checkPatternInput("arrow")).toBeFalsy();
  });

  test("輸入 right，應通過", () => {
    expect(checkPatternInput("heart")).toBeFalsy();
  });

  test("輸入 LEFT，應報錯", () => {
    expect(() => checkPatternInput("hea")).toThrow();
  });

  test("輸入 左邊，應報錯", () => {
    expect(() => checkPatternInput("hea")).toThrow();
  });

  test("輸入空白，應報錯", () => {
    expect(() => checkPatternInput(" ")).toThrow();
  });
});
