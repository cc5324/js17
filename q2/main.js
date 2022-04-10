import { getInputAndValidate } from "../syncInput/getInputAndValidate.js";
import { checkInteger } from "../validation/validators.js";
import { isReminderSame } from "./isReminderSame.js";
import { getIntegerInput } from "../syncInput/getNumberInput.js";

main();

function main() {
  console.log(`判別兩數除以 3 的餘數是否相同
請分別輸入兩個整數`);

  // const settingNum1 = {
  //   question: "請輸入第一個數字",
  //   validators: [checkInteger],
  //   returnType: Number,
  // };
  // const settingNum2 = {
  //   question: "請輸入第二個數字",
  //   validators: [checkInteger],
  //   returnType: Number,
  // };
  // const number1 = getInputAndValidate(settingNum1);
  // const number2 = getInputAndValidate(settingNum2);

  const number1 = getIntegerInput("請輸入第一個數字");
  const number2 = getIntegerInput("請輸入第二個數字");

  const divisor = 3;
  const result = isReminderSame(number1, number2, divisor);
  const resultMessage = result ? "餘數相同" : "餘數不相同";

  console.log(resultMessage);
}
