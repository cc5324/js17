import { readline } from "./readline.js";
import { checkNotEmpty } from "../validation/validators.js";

/**
 * @async
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

export async function getValidatedInput({
  question,
  validators = [checkNotEmpty],
  returnType = String,
} = {}) {
  const userInput = await getInput(question);
  try {
    validateInput(userInput, validators);
  } catch (error) {
    console.log(error.message);
    return getValidatedInput({ question, validators, returnType });
  }
  return returnType(userInput);
}

/**
 * @async
 * @param {string} question
 * @returns {string} user input
 */

export async function getInput(question) {
  const userInput = readline.question(`${question}: `);
  return userInput;
}

/**
 * @param {string} userInput
 * @param {Function[]} validators validate input functions
 * @throws will throw error if userInput did not pass validators functions
 */

export function validateInput(input, validators) {
  validators.forEach((validator) => {
    validator(input);
  });
}

/**
 * @async
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

export async function getInputAndValidate({
  question,
  validators = [checkNotEmpty],
  returnType = String,
}) {
  const userInput = await readline.question(`${question}: `);
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
