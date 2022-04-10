import {
  checkInteger,
  checkNotEmpty,
  checkDecimalNumber,
  checkPositive,
  checkNotNegative,
  checkOverNum,
  checkEven,
} from "./validators";

//驗證使用者輸入，故測資以字串為主

//測試輸入是否為空，包含字串及空輸入
//因為錯誤訊息相同，不特別判定訊息內容
describe("測試輸入不得為空", () => {
  test("輸入為空字串('')應報錯", () => {
    expect(() => checkNotEmpty("")).toThrow();
  });

  test("輸入為純空白字符(' ')應報錯", () => {
    expect(() => checkNotEmpty(" ")).toThrow();
  });

  test("輸入為字串'abc'應通過", () => {
    expect(checkNotEmpty("abc")).toBeFalsy();
  });

  test("輸入為字串含空白字符('a b c')應通過", () => {
    expect(checkNotEmpty("a b c")).toBeFalsy();
  });
});

//測試十進位數字
describe("測試輸入需為十進位有效數字", () => {
  describe("輸入十進位有效數字應通過", () => {
    //應通過
    test("輸入 100 應通過", () => {
      expect(checkDecimalNumber("100")).toBeFalsy();
    });
    test("輸入 0 應通過", () => {
      expect(checkDecimalNumber("0")).toBeFalsy();
    });
  });
  //應報錯 - Infinity
  describe("輸入無限數值應報錯，報錯訊息:請勿輸入無限數值", () => {
    test("輸入 Infinity 應報錯", () => {
      expect(() => checkDecimalNumber("Infinity")).toThrow("請勿輸入無限數值");
    });
    test("輸入 -Infinity 應報錯", () => {
      expect(() => checkDecimalNumber("-Infinity")).toThrow("請勿輸入無限數值");
    });
  });
  //應報錯 - 英文字串（非特殊進位制表示）
  describe("輸入為字母或特殊符號...非數字應報錯，報錯訊息:請勿輸入文字", () => {
    test("輸入 abc 應報錯", () => {
      expect(() => checkDecimalNumber("abc")).toThrow("請勿輸入文字");
    });
    test("輸入 0bff 應報錯", () => {
      expect(() => checkDecimalNumber("0bff")).toThrow("請勿輸入文字");
    });
    test("輸入 *** 應報錯", () => {
      expect(() => checkDecimalNumber("***")).toThrow("請勿輸入文字");
    });
  });
  //應報錯 - 其他進位制
  describe("輸入其他進位制數字應報錯，報錯訊息:請將當前進位制應改為十進位", () => {
    test("輸入 0b110 應報錯，提醒輸入為二進位數字", () => {
      expect(() => checkDecimalNumber("0b110")).toThrow(/二進位/);
    });
    test("輸入 0o777 應報錯，提醒輸入為八進位數字", () => {
      expect(() => checkDecimalNumber("0o777")).toThrow(/八進位/);
    });

    test("輸入 0xff 應報錯，提醒輸入為十六進位數字", () => {
      expect(() => checkDecimalNumber("0xff")).toThrow(/十六進位/);
    });
  });
  //應報錯 - 科學記號表示法
  describe("輸入為科學記號表示法應報錯，報錯訊息:請勿使用科學記號表示法", () => {
    //應報錯 －　使用科學記號
    test("輸入 12e+5 應報錯", () => {
      expect(() => checkDecimalNumber("12e+5")).toThrow(/科學記號/);
    });
    test("輸入 0E+0 應報錯", () => {
      expect(() => checkDecimalNumber("0E+0")).toThrow(/科學記號/);
    });
  });
  //應報錯 - 非小數或 0 不得以 0 開頭
  describe("輸入非小數或 0，但以 0 開頭應報錯，報錯訊息:數字開頭不得為 0，請去掉 0 後重新輸入", () => {
    //應通過 - 一般小數或 0 應通過
    test("輸入 0.123 應通過", () => {
      expect(checkDecimalNumber("0.123")).toBeFalsy();
    });

    test("輸入 0 應通過", () => {
      expect(checkDecimalNumber("0")).toBeFalsy();
    });
    //應報錯 - 0 不得為首位數字(ex. 01 請改輸入 1)
    test("輸入 0123 應報錯", () => {
      expect(() => checkDecimalNumber("01")).toThrow(/數字開頭不得為 0/);
    });
  });
});

//測試整數
//因為錯誤訊息相同，不特別判定訊息內容
describe("測試輸入需為整數", () => {
  //應通過
  test("輸入 100 應通過", () => {
    expect(checkInteger("100")).toBeFalsy();
  });

  test("輸入 -100 應通過", () => {
    expect(checkInteger("-100")).toBeFalsy();
  });

  test("輸入 0 應通過", () => {
    expect(checkInteger("0")).toBeFalsy();
  });

  //應報錯 - 小數點
  test("輸入 0.9 應報錯", () => {
    expect(() => checkInteger("0.9")).toThrow();
  });

  test("輸入 -0.9 應報錯", () => {
    expect(() => checkInteger("-0.9")).toThrow();
  });
});

//測試正數（不包括0）
describe("測試輸入需為正數", () => {
  //應通過
  test("1 is positive", () => {
    expect(checkPositive("1")).toBeFalsy();
  });

  test("0.1 is positive", () => {
    expect(checkPositive("0.1")).toBeFalsy();
  });
  //應報錯
  test("-1 is not positive", () => {
    expect(() => checkPositive("-1")).toThrow("請勿輸入負數");
  });

  test("0 is not positive", () => {
    expect(() => checkPositive("0")).toThrow("請勿輸入 0");
  });
});

//測試非負數(包括正數＆0)
describe("測試輸入不得為負數（需為正數或 0）", () => {
  //應通過
  test("輸入 1 不是負數，應通過", () => {
    expect(checkNotNegative("1")).toBeFalsy();
  });

  test("輸入 0 不是負數，應通過", () => {
    expect(checkNotNegative("0")).toBeFalsy();
  });
  //應報錯
  test("輸入 -1 不是負數，應通過", () => {
    expect(() => checkNotNegative("-1")).toThrow("請勿輸入負數");
  });
});

//測試一定數字以上
//因為錯誤訊息相同，不特別判定訊息內容
describe("測試輸入不得小於指定數值", () => {
  describe("測試輸入不得小於 4", () => {
    const barNumber = 4;
    //應通過
    test("輸入 4，不小於 4，應通過", () => {
      expect(checkOverNum("4", barNumber)).toBeFalsy();
    });
    test("輸入 8，不小於 4，應通過", () => {
      expect(checkOverNum("8", barNumber)).toBeFalsy();
    });
    //應報錯
    test("輸入 1，小於 4，應報錯", () => {
      expect(() => checkOverNum("1", barNumber)).toThrow();
    });

    test("輸入 -1，小於 4，應報錯", () => {
      expect(() => checkOverNum("-1", barNumber)).toThrow();
    });
  });
});

//測試是否為偶數
//因為錯誤訊息相同，不特別判定訊息內容
describe("測試輸入需為偶數", () => {
  //應通過
  test("輸入 4 是偶數，應通過", () => {
    expect(checkEven("4")).toBeFalsy();
  });
  test("輸入 -4 是偶數，應通過", () => {
    expect(checkEven("-4")).toBeFalsy();
  });
  test("輸入 0 是偶數，應通過", () => {
    expect(checkEven("0")).toBeFalsy();
  });

  //應報錯
  test("輸入 11 不是偶數，應報錯", () => {
    expect(() => checkEven("11")).toThrow();
  });

  test("輸入 -7 不是偶數，應報錯", () => {
    expect(() => checkEven("-7")).toThrow();
  });

  test("輸入 0.2 不是偶數，應報錯", () => {
    expect(() => checkEven("0.2")).toThrow();
  });
});
