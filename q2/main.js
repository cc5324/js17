import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { checkInteger } from "../validation/validateInput.js";
import { isReminderSame } from "./isReminderSame.js";

main();

function main() {
  console.log(`判別兩數除以 3 的餘數是否相同
請分別輸入兩個整數`);

  const settingNum1 = {
    question: "請輸入第一個數字",
    validators: [checkInteger],
  };
  const settingNum2 = {
    question: "請輸入第二個數字",
    validators: [checkInteger],
  };
  const number1 = Number(getInputAndValidate(settingNum1));
  const number2 = Number(getInputAndValidate(settingNum2));

  const divisor = 3;
  const result = isReminderSame(number1, number2, divisor);
  const resultMessage = result ? "餘數相同" : "餘數不相同";

  // const resultMessage = isReminderSame(number1, number2, divisor)
  //   ? "餘數相同"
  //   : "餘數不相同";
  console.log(resultMessage);
}
