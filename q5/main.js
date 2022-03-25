//n最小為4，只輸入偶數
import { getUserInput } from "./get-input.js";
import { umleven } from "./umleven.js";

main();

function main() {
  let number = getUserInput();
  let result = umleven(number);
  console.log(`結果為：${result}`);
}
