import { mainFormula } from "./formula";

describe("test formula and result of 1+2-3+4-5+6...n", () => {
  test("formula: 1+2-3+4-5+6 and sum :5", () => {
    answer = mainFormula(5);
    let formula = answer.formula;
    let sum = answer.sum;
    expect(formula).toBe("1+2-3+4-5");
    expect(sum).toBe(-1);
  });

  test("formula: 1+2-3+4-5+6 and sum :5", () => {
    answer = mainFormula(10);
    let formula = answer.formula;
    let sum = answer.sum;
    expect(formula).toBe("1+2-3+4-5+6-7+8-9+10");
    expect(sum).toBe(7);
  });
});
