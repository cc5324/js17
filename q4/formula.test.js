import { listFormulaAndCalculate } from "./formula";

describe("測試輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和", () => {
  test("輸入 5，印出算式: 1+2-3+4-5 和總和: -1", () => {
    //Arrange
    const inputNum = 5;
    const expectFormula = "1+2-3+4-5";
    //Act
    const formula = listFormulaAndCalculate(inputNum);
    //Assert
    expect(formula).toBe(expectFormula);
  });

  test("輸入 10，印出算式:1+2-3+4-5+6-7+8-9+10 和總和 :7", () => {
    //Arrange
    const inputNum = 10;
    const expectFormula = "1+2-3+4-5+6-7+8-9+10";
    //Act
    const formula = listFormulaAndCalculate(inputNum);
    //Assert
    expect(formula).toBe(expectFormula);
  });

  test("輸入 8 得到計算結果(物件)，應包含算式: 1+2-3+4-5+6-7+8 和總和: 6", () => {
    //Arrange
    const inputNum = 8;
    const expectFormula = "1+2-3+4-5+6-7+8";
    //Act
    const formula = listFormulaAndCalculate(inputNum);
    //Assert
    expect(formula).toBe(expectFormula);
  });
});
