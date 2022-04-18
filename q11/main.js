import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";
import { gymFeeCalculator } from "./gymFeeCalculator.js";

function main() {
  const periods = getPositiveIntegerInput("請輸入期數");
  const totalFee = gymFeeCalculator(periods);
  console.log(`總費用為 ${totalFee}`);
}

main();
