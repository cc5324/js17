import { checkInteger, checkPositive } from "../validation/validators.js";
import { getFormattedInput } from "../syncInput/getFormattedInput.js";

import { getPositiveIntegerInput } from "../syncInput/getNumberInput.js";

import { getPrice } from "./getPrice.js";

main();

function main() {
  console.log(`好想樂園門票試算
注意未滿 1 歲請輸入 1 歲`);

  // const setting = {
  //   question: "請輸入年齡",
  //   validators: [checkInteger, checkPositive],
  //   returnType: Number,
  // };
  // const userAge = getFormattedInput(setting);

  const userAge = getPositiveIntegerInput("請輸入年齡");

  const userPrice = getPrice(userAge);
  console.log(`票價為 ${userPrice} 元`);
}
