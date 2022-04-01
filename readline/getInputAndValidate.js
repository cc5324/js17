import { rl } from "./readline.js";

/**
 * 1.Get user input from prompt-sync
 * 2.Validate input by validators specified in param
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {array} setting.validators validate input functions
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
