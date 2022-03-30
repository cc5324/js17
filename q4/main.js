import { checkInteger, checkPositive } from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { listFormulaAndCalculate } from "./formula.js";

main();

function main() {
  const setting = {
    question: "請輸入一個正整數",
    validators: [checkInteger, checkPositive],
  };
  const number = getInputAndValidate(setting);
  const result = listFormulaAndCalculate(number);
  const { formula, sum } = result;
  const equation = `${formula} = ${sum}`;
  console.log(equation);
}
