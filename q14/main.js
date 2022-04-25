import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";
import { twoFold } from "./twoFold.js";

main();

function main() {
  const initialBacteria = getPositiveIntegerInput("請輸入原始細菌數量");
  const minutes = getPositiveIntegerInput("請輸入經過時間");

  const finalBacteria = twoFold(initialBacteria, minutes);

  console.log(`經過 ${minutes} 分鐘後，細菌共有 ${finalBacteria} 隻`);
}
