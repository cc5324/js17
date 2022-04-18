import { getPositiveIntegerInput } from "../utilities/syncInput/getNumberInput.js";
import { twoFold } from "./twoFold.js";

//TODO 改用線性函式計算未滿 20 分鐘狀況下，細菌數量增長的情況
//! 我做了 但覺得好奇怪

main();

function main() {
  console.log(`某某細菌每經過 20 分鐘細菌數量會增加為原來的 2 倍
讓輸入原始細菌數及分鐘數，
將計算在沒有細菌死亡的狀況下，
指定時間過後細菌有幾隻
`);
  const initialBacteria = getPositiveIntegerInput("請輸入原始細菌數量");
  const minutes = getPositiveIntegerInput("請輸入經過時間");

  const finalBacteria = twoFold(initialBacteria, minutes);

  console.log(`經過 ${minutes} 分鐘後，細菌共有 ${finalBacteria} 隻`);
}
