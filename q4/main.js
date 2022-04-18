import {
  checkInteger,
  checkPositive,
} from "../utilities/validation/validators.js";
import { getFormattedInput } from "../utilities/syncInput/getFormattedInput.js";
import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";

import { listFormulaAndCalculate } from "./formula.js";

main();

function main() {
  // const setting = {
  //   question: "請輸入一個正整數",
  //   validators: [checkInteger, checkPositive],
  //   returnType: Number,
  // };
  // const number = getFormattedInput(setting);
  const number = getPositiveIntegerInput("請輸入一個正整數");

  const formula = listFormulaAndCalculate(number);
  const equation = `${formula} = ${new Function([], "return " + formula)()}`;
  console.log(equation);
}
