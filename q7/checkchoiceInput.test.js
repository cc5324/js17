import { checkPatternInput, checkDirectionInput } from "./checkChoiceInput";

describe("測驗輸入不為 arrow 或 heart 應報錯", () => {
  test("輸入 arrow，應通過", () => {
    expect(checkPatternInput("arrow")).toBeFalsy();
  });

  test("輸入 HEART，應通過", () => {
    expect(checkPatternInput("HEART")).toBeFalsy();
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
    expect(checkDirectionInput("up")).toBeFalsy();
  });

  test("輸入 RIGHT，應通過", () => {
    expect(checkDirectionInput("RIGHT")).toBeFalsy();
  });

  test("輸入 lefte，應報錯", () => {
    expect(() => checkDirectionInput("direction")).toThrow();
  });

  test("輸入空白，應報錯", () => {
    expect(() => checkDirectionInput(" ")).toThrow();
  });
});
