import { rl } from "./readline.js";
import { checkNotEmpty } from "../validation/validators.js";

/**
 * @async
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {Function[]} setting.validators validate input functions
 * @param {Number|String|Boolean} setting.returnType coercion input to specific type
 */

export async function getFormattedInput({
  question,
  validators = [checkNotEmpty],
  returnType = String,
} = {}) {
  const userInput = await getInput(question);
  try {
    validateInput(userInput, validators);
  } catch (error) {
    console.log(error.message);
    return getFormattedInput({ question, validators, returnType });
  }
  return coercionInput(userInput, returnType);
}

/**
 * @async
 * @param {string} question
 * @returns {string} user input
 */

async function getInput(question) {
  const userInput = rl.question(`${question}: `);
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

/**
 * @param {string} userInput
 * @param {Number|String|Boolean} returnType
 */

function coercionInput(input, returnType) {
  return returnType(input);
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
