//n最小為4，只輸入偶數
import { getUserInput } from "./getInput.js";
import { umleven } from "./umleven.js";

main();

function main() {
  const number = getUserInput();
  const result = umleven(number);
  console.log(`結果為：${result}`);
}
