import { divi } from "./divi.js";
import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";

main();

function main() {
  console.log(
    "計算某正整數不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0"
  );
  const userNumber = getPositiveIntegerInput("請輸入正整數");
  // const diviTimes = divi(userNumber);

  const divi3 = divi({
    divisor: 3,
    decimalPlaces: 2,
    decimalPlacesNumber: 0,
  });

  const diviTimes = divi3(userNumber);

  console.log(`除以 ${diviTimes} 次後小數點後第 2 位會等於 0`);
}
