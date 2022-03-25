// Common JS module 匯入方式
// const prompt = require('prompt-sync')({sigint: true});

// ES module 匯入方式
import promptSync from "prompt-sync";
import { isInteger, isNotNegative } from "../checkInput/verify-input.js";

function checkInput() {
  let userInput = getInput();
  try {
    isInteger(userInput);
    isNotNegative(userInput);
    return Number(userInput);
  } catch (error) {
    console.log(error);
    return checkInput();
  }
}

function getInput() {
  const prompt = promptSync({ sigint: true });
  let userInput = prompt("請輸入客人人數：");
  return userInput;
}

export { checkInput };

// function main() {
//   let guestNumber = checkInput();
//   if (guestNumber !== 0) {
//     console.log(`觀影人數: ${guestNumber}，照常播放電影`);
//   } else {
//     console.log("今日不播放電影");
//   }
// }

// function getUserInput() {
//   let userInput = prompt("請輸入客人人數：");
//   try {
//     isInteger(userInput);
//     isNotNegative(userInput);
//     return Number(userInput);
//   } catch (error) {
//     console.log(error);
//     return getUserInput();
//   }
// }
