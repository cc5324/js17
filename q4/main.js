// import promptSync from "prompt-sync";
// import { isInteger, isPositive } from "../checkInput/verify-input.js";
import { mainFormula } from "./formula.js";
import { getUserInput } from "./get-input.js";

main();

function main() {
  let number = getUserInput();
  let equation = `${mainFormula(number)} = ${eval(mainFormula(number))}`;
  console.log(equation);
}
