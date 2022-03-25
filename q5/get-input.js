import promptSync from "prompt-sync";
import { isInteger, isOverNum, isEven } from "../checkInput/verify-input.js";

export function getUserInput() {
  const prompt = promptSync({ sigint: true });

  let userInput = prompt("請輸入一個大於四的偶數：");
  try {
    isInteger(userInput);
    isOverNum(userInput, 4);
    isEven(userInput);
    return Number(userInput);
  } catch (error) {
    console.log(error);
    return getUserInput();
  }
}
