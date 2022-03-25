import { mainFormula } from "./formula";

describe("test result of 1+2-3+4-5+6...n", () => {
  test("1+2-3+4-5+6 = 5", () => {
    let result = eval(mainFormula(6));
    expect(result).toBe(5);
  });

  test("1+2-3+4-5+6+-7 = -2", () => {
    let result = eval(mainFormula(7));
    expect(result).toBe(-2);
  });

  test("1+2-3+4-5+6+...+10 = 7", () => {
    let result = eval(mainFormula(10));
    expect(result).toBe(7);
  });

  test("1+2-3+4-5+6+...-13 = -5", () => {
    let result = eval(mainFormula(13));
    expect(result).toBe(-5);
  });
});

describe("print formula - 1+2-3+4-5+6...n", () => {
  test("print 1+2-3+4-5+6 by mainFormula(6)", () => {
    let formula = mainFormula(6);
    expect(formula).toBe("1+2-3+4-5+6");
  });

  test("print 1+2-3+4-5+6-7 by mainFormula(7)", () => {
    let formula = mainFormula(7);
    expect(formula).toBe("1+2-3+4-5+6-7");
  });

  test("1+2-3+4-5+6+...+10 by mainFormula(10))", () => {
    let formula = mainFormula(10);
    expect(formula).toBe("1+2-3+4-5+6-7+8-9+10");
  });

  test("1+2-3+4-5+6+...-13 by mainFormula(13)", () => {
    let formula = mainFormula(13);
    expect(formula).toBe("1+2-3+4-5+6-7+8-9+10-11+12-13");
  });
});
