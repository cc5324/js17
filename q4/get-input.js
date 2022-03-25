import promptSync from "prompt-sync";
import { isInteger, isPositive } from "../checkInput/verify-input.js";

export function getUserInput() {
  const prompt = promptSync({ sigint: true });
  let userInput = prompt("請輸入一個正整數：");
  try {
    isInteger(userInput);
    isPositive(userInput);
    return Number(userInput);
  } catch (error) {
    console.log(error);
    return getUserInput();
  }
}
