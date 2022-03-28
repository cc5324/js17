// import promptSync from "prompt-sync";
// import { isInteger, isPositive } from "../checkInput/verify-input.js";
import { mainFormula } from "./formula.js";
import { getUserInput } from "./get-input.js";

main();

function main() {
  let number = getUserInput();
  // let equation = `${mainFormula(number)} = ${eval(mainFormula(number))}`;
  let result = mainFormula(number);

  // let formula = result.formula;
  // let sum = result.sum;

  let formula, sum;
  ({ formula, sum } = result);

  let equation = `${formula} = ${sum}`;
  console.log(equation);
}
