import {
  checkInteger,
  checkEven,
  checkOverNum,
} from "../utilities/validation/validators.js";
import { getFormattedInput } from "../utilities/syncInput/getFormattedInput.js";
import { umleven } from "./umleven.js";

main();

function main() {
  const setting = {
    question: "請輸入一個大於四(含)的偶數",
    validators: [checkInteger, checkEven, checkOverNum(4)],
    returnType: Number,
  };
  const number = getFormattedInput(setting);
  const result = umleven(number);
  console.log(`結果為：${result}`);
}
