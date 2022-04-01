import {
  checkInteger,
  checkEven,
  checkOverFour,
} from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { umleven } from "./umleven.js";

main();

function main() {
  const setting = {
    question: "請輸入一個大於四(含)的偶數",
    validators: [checkInteger, checkEven, checkOverFour],
  };
  const number = Number(getInputAndValidate(setting));
  const result = umleven(number);
  console.log(`結果為：${result}`);
}
