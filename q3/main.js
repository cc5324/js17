import { checkInteger, checkPositive } from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { getPrice } from "./getPrice.js";

main();

function main() {
  const setting = {
    question: "請輸入年齡",
    validators: [checkInteger, checkPositive],
  };

  console.log(`好想樂園門票試算
注意未滿 1 歲請輸入 1 歲`);

  const userAge = getInputAndValidate(setting);
  const userPrice = getPrice(userAge);
  console.log(`票價為 ${userPrice} 元`);
}
