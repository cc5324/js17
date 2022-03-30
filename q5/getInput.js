import promptSync from "prompt-sync";
import {
  checkInteger,
  checkOverNum,
  checkEven,
} from "../validation/validateInput.js";

export function getUserInput() {
  const prompt = promptSync({ sigint: true });

  const userInput = prompt("請輸入一個大於四的偶數：");
  try {
    checkInteger(userInput);
    checkOverNum(userInput, 4);
    checkEven(userInput);
    return Number(userInput);
  } catch (error) {
    console.log(error);
    return getUserInput();
  }
}
