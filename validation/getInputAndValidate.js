import promptSync from "prompt-sync";

export function getInputAndValidate(setting) {
  const prompt = promptSync({ sigint: true });
  let userInput = prompt(`${setting.question}: `);

  try {
    setting.validators.forEach((validator) => {
      validator(userInput);
    });
    return Number(userInput);
  } catch (error) {
    console.log(error);
    return getInputAndValidate(setting);
  }
}
