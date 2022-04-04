// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
import {
  checkInteger,
  checkNotNegative,
} from "../../validation/validateInput.js";
import { getInputAndValidate } from "./getInputAndValidate.js";
import { canPlayMovie } from "../canPlayMovie.js";
import { rl } from "../../readline/readline.js";

main();

async function main() {
  const setting = {
    question: "請輸入客人人數",
    validators: [checkInteger, checkNotNegative],
    returnType: Number,
  };
  let guestNumber = await getInputAndValidate(setting);
  // guestNumber = Number(guestNumber);

  if (canPlayMovie(guestNumber)) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
    rl.close();
  } else {
    console.log("今日不播放電影");
    rl.close();
  }
}
