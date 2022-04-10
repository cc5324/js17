// import * as readline from "node:asyncInput/promises";
// import { stdin as input, stdout as output } from "node:process";
import { checkInteger, checkNotNegative } from "../../validation/validators.js";
// import { getInputAndValidate } from "../../asyncInput/getInputAndValidate.js
import { canPlayMovie } from "../canPlayMovie.js";
import { rl } from "../../asyncInput/readline.js";
import { getNaturalNumberInput } from "../../asyncInput/getNumberInput.js";

main();

async function main() {
  // const setting = {
  //   question: "請輸入客人人數",
  //   validators: [checkInteger, checkNotNegative],
  //   returnType: Number,
  // };
  // const guestNumber = await getInputAndValidate(setting);
  // guestNumber = Number(guestNumber);

  const guestNumber = await getNaturalNumberInput("請輸入客人人數");

  if (canPlayMovie(guestNumber)) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
    rl.close();
  } else {
    console.log("今日不播放電影");
    rl.close();
  }
}
