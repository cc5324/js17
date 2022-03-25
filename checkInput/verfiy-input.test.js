import {
  isInteger,
  isNotEmpty,
  isDecimalNumber,
  isPositive,
  isNotNegative,
  isOverNum,
  isEven,
} from "./verify-input";

//驗證使用者輸入，故測資以字串為主

//測試輸入是否為空，包含字串及空輸入
//因為錯誤訊息相同，不特別判定訊息內容
describe("input should not be empty", () => {
  test("entering with nothing should throw error", () => {
    expect(() => isNotEmpty("")).toThrow();
  });

  test("entering only whitespace should throw error", () => {
    expect(() => isNotEmpty(" ")).toThrow();
  });

  test("entering string should pass", () => {
    expect(isNotEmpty("abc")).toBeFalsy();
  });

  test("entering string with whitespace should pass", () => {
    expect(isNotEmpty("a b c")).toBeFalsy();
  });
});

//測試十進位數字
describe("input should be decimal number", () => {
  //應通過
  test("100 is decimal number", () => {
    expect(isDecimalNumber("100")).toBeFalsy();
  });
  test("0 is decimal number", () => {
    expect(isDecimalNumber("0")).toBeFalsy();
  });
  //應報錯 - Infinity
  test("Infinity is not accepted", () => {
    expect(() => isDecimalNumber("Infinity")).toThrow("請勿輸入無限數值");
  });
  test("-Infinity is not accepted", () => {
    expect(() => isDecimalNumber("-Infinity")).toThrow("請勿輸入無限數值");
  });
  //應報錯 - 英文字串（非特殊進位制表示）
  test("abc is not decimal number", () => {
    expect(() => isDecimalNumber("abc")).toThrow("請勿輸入文字");
  });
  test("0bff is not decimal number", () => {
    expect(() => isDecimalNumber("0bff")).toThrow("請勿輸入文字");
  });
  //應報錯 - 其他進位制
  test("0b110 is not decimal number", () => {
    expect(() => isDecimalNumber("0b110")).toThrow(/二進位/);
  });
  test("0o777 is not decimal number", () => {
    expect(() => isDecimalNumber("0o777")).toThrow(/八進位/);
  });

  test("0xff is not decimal number", () => {
    expect(() => isDecimalNumber("0xff")).toThrow(/十六進位/);
  });
  //應報錯 －　使用科學記號
  test("12e+5 is not decimal", () => {
    expect(() => isDecimalNumber("12e+5")).toThrow(/科學記號/);
  });
  test("0E+0 is not decimal", () => {
    expect(() => isDecimalNumber("0E+0")).toThrow(/科學記號/);
  });
  //應報錯 - 0 不得為首位數字(ex. 01 請改輸入 1)
  test("0123 is not decimal number", () => {
    expect(() => isDecimalNumber("01")).toThrow(/首位數字不得為 0/);
  });
});

//測試整數
//因為錯誤訊息相同，不特別判定訊息內容
describe("input should be integer number", () => {
  //應通過
  test("100 is an integer", () => {
    expect(isInteger("100")).toBeFalsy();
  });

  test("-100 is an integer", () => {
    expect(isInteger("-100")).toBeFalsy();
  });

  test("0 is an integer", () => {
    expect(isInteger("0")).toBeFalsy();
  });

  //應報錯 - 小數點
  test("0.9 is not an integer", () => {
    expect(() => isInteger("0.9")).toThrow();
  });

  test("-0.9 is not an integer", () => {
    expect(() => isInteger("-0.9")).toThrow();
  });
});

//測試正數（不包括0）
describe("number should be a positive number", () => {
  //應通過
  test("1 is positive", () => {
    expect(isPositive("1")).toBeFalsy();
  });

  test("0.1 is positive", () => {
    expect(isPositive("0.1")).toBeFalsy();
  });
  //應報錯
  test("-1 is not positive", () => {
    expect(() => isPositive("-1")).toThrow("請勿輸入負數");
  });

  test("0 is not positive", () => {
    expect(() => isPositive("0")).toThrow("請勿輸入 0");
  });
});

//測試非負數(包括正數＆0)
describe("number should be positive numbers or zero", () => {
  //應通過
  test("1 is not negative", () => {
    expect(isNotNegative("1")).toBeFalsy();
  });

  test("0 is not negative", () => {
    expect(isNotNegative("0")).toBeFalsy();
  });
  //應報錯
  test("-1 is not positive", () => {
    expect(() => isNotNegative("-1")).toThrow("請勿輸入負數");
  });
});

//測試一定數字以上
//因為錯誤訊息相同，不特別判定訊息內容
describe("number should not less than specific number", () => {
  //應通過
  test("4 is not less than 4", () => {
    expect(isOverNum(4, 4)).toBeFalsy();
  });
  test("8 is not less than 4", () => {
    expect(isOverNum(8, 4)).toBeFalsy();
  });

  //應報錯
  test("1 is less than 4", () => {
    expect(() => isOverNum(1, 4)).toThrow();
  });

  test("-1 is less than 4", () => {
    expect(() => isOverNum(-1, 4)).toThrow();
  });
});

//測試是否為偶數
//因為錯誤訊息相同，不特別判定訊息內容
describe("number should be Even", () => {
  //應通過
  test("4 is even", () => {
    expect(isEven(4)).toBeFalsy();
  });
  test("-4 is even", () => {
    expect(isEven(-4)).toBeFalsy();
  });
  test("0 is even", () => {
    expect(isEven(0)).toBeFalsy();
  });

  //應報錯
  test("11 is not even", () => {
    expect(() => isEven(11)).toThrow();
  });

  test("-7 is not even", () => {
    expect(() => isEven(-7)).toThrow();
  });
});
