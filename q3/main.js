import { getUserAge } from "./get-age.js";
import { getPrice } from "./get-price.js";

main();

function main() {
  console.log(`好想樂園門票試算
注意未滿 1 歲請輸入 1 歲`);
  let userAge = getUserAge();
  let userPrice = getPrice(userAge);
  console.log(`票價為 ${userPrice} 元`);
}
