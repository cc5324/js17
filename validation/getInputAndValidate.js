import promptSync from "prompt-sync";
import { checkInteger, checkNotEmpty } from "./validateInput.js";

/**
 * @param {string} question user input (if validated successfully)
 * @param {Function[]} validators validate input functions
 */

export function getInputAndValidate({
  question,
  validators = [checkNotEmpty],
} = {}) {
  console.log(question);
  const prompt = promptSync({ sigint: true });
  const userInput = prompt(`${question}: `);
  try {
    // checkNotEmpty(userInput);
    // checkInteger();
    validators.forEach((validator) => {
      validator(userInput);
    });
    return userInput;
  } catch (error) {
    console.log(error);
    return getInputAndValidate({ question, validators });
  }
}
