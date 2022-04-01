import promptSync from "prompt-sync";

/**
 * 1.Get user input from prompt-sync
 * 2.Validate input by validators specified in param
 * @param {object} setting - contain prompt question(string) and validators(function name) to use
 * @returns {string} user input (if validated successfully)
 */

export function getInputAndValidate(setting) {
  const prompt = promptSync({ sigint: true });
  const userInput = prompt(`${setting.question}: `);

  try {
    setting.validators.forEach((validator) => {
      validator(userInput);
    });
    return userInput;
  } catch (error) {
    console.log(error);
    return getInputAndValidate(setting);
  }
}
