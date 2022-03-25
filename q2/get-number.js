import promptSync from "prompt-sync";
import { isInteger } from "../checkInput/verify-input.js";

function getNumber1() {
  const prompt = promptSync({ sigint: true });
  let number1 = prompt("請輸入第一個數字：");
  try {
    isInteger(number1);
    return Number(number1);
  } catch (error) {
    console.log(error);
    return getNumber1();
  }
}

function getNumber2() {
  const prompt = promptSync({ sigint: true });
  let number2 = prompt("請輸入第二個數字：");
  try {
    isInteger(number2);
    return Number(number2);
  } catch (error) {
    console.log(error);
    return getNumber2();
  }
}

export { getNumber1, getNumber2 };
