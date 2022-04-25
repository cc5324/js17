import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";
import { gymFeeCalculator } from "./gymFeeCalculator.js";
import { getInput } from "../utilities/syncInput/getValidatedInput.js";
import {
  checkInteger,
  checkPositive,
} from "../utilities/validation/validators.js";

main();

function main() {
  try {
    const userInput = getInput("請輸入期數");

    const validators = [checkInteger, checkPositive];
    // console.log(`validators`, validators);
    validators.forEach((validator) => {
      // console.log(`validator`, validator);
      validator(userInput);
    });

    const periods = Number(userInput);
    const totalFee = gymFeeCalculator(periods);
    console.log(`總費用為 ${totalFee}`);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

// function main() {
//   const periods = getPositiveIntegerInput("請輸入期數");
//   const totalFee = gymFeeCalculator(periods);
//   console.log(`總費用為 ${totalFee}`);
// }
