import { rl } from "./readline.js";

/**
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

export async function getInputAndValidate({
  question,
  validators = [checkNotEmpty],
  returnType = String,
} = {}) {
  const userInput = await rl.question(`${question}: `);
  try {
    validators.forEach((validator) => {
      validator(userInput);
    });
    return returnType(userInput);
  } catch (error) {
    console.log(error.message);
    return getInputAndValidate({ question, validators, returnType });
  }
}

//* 舊版，沒有設置預設參數
// export async function getInputAndValidate(setting) {
//   const userInput = await rl.question(`${setting.question}: `);
//   try {
//     setting.validators.forEach((validator) => {
//       validator(userInput);
//     });
//     return setting.returnType(userInput);
//   } catch (error) {
//     console.log(error);
//     return getInputAndValidate(setting);
//   }
// }
