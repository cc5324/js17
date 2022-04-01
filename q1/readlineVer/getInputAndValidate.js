import { rl } from "../../readline/readline.js";

/**
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

export async function getInputAndValidate(setting) {
  let userInput = await rl.question(`${setting.question}: `);
  try {
    setting.validators.forEach((validator) => {
      validator(userInput);
    });
    return setting.returnType(userInput);
  } catch (error) {
    console.log(error);
    return getInputAndValidate(setting);
  }
}
