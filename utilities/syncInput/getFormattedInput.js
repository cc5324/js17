import promptSync from "prompt-sync";
import { checkNotEmpty } from "../validation/validators.js";

/**
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

// export function getFormattedInput({
//   question,
//   validators = [checkNotEmpty],
//   returnType = String,
// } = {}) {
//   const prompt = promptSync({ sigint: true });
//   const userInput = prompt(`${question}: `);
//   try {
//     validators.forEach((validator) => {
//       validator(userInput);
//     });
//     return returnType(userInput);
//   } catch (error) {
//     console.log(error.message);
//     return getFormattedInput({ question, validators, returnType });
//   }
// }

function getFormattedInput({
  question,
  validators = [checkNotEmpty],
  returnType = String,
} = {}) {
  const userInput = getInput(question);
  try {
    validateInput(userInput, validators);
  } catch (error) {
    console.log(error.message);
    return getFormattedInput({ question, validators, returnType });
  }
  return returnType(userInput);
}

/**
 * @param {string} question
 * @returns {string} user input
 */

function getInput(question) {
  const prompt = promptSync({ sigint: true });
  const userInput = prompt(`${question}: `);
  return userInput;
}

/**
 * @param {string} userInput
 * @param {Function[]} validators validate input functions
 * @throws will throw error if userInput did not pass validators functions
 */

function validateInput(input, validators) {
  validators.forEach((validator) => {
    validator(input);
  });
}

export { getFormattedInput, getInput, validateInput };
