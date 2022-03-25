import { compareReminder } from "./compare-reminder.js";
import { getNumber1, getNumber2 } from "./get-number.js";

main();

function main() {
  console.log("請分別輸入數字");
  let number1 = getNumber1();
  let number2 = getNumber2();
  console.log(compareReminder(number1, number2, 3));
}
