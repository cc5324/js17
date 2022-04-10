import divi from "./divi.js";
import { getPositiveIntegerInput } from "../syncInput/getNumberInput.js";

main();

function main() {
  console.log(
    "計算某正整數不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0"
  );
  const number = getPositiveIntegerInput("請輸入正整數");
  const diviCounts = divi(number);
  console.log(diviCounts);
}
