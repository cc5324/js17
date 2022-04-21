import { checkAlphabet } from "../validation/validators.js";
import { getFormattedInput } from "./getFormattedInput.js";

function getAlphabetInput(question) {
  return getFormattedInput({
    question,
    validators: [checkAlphabet],
  });
}

export { getAlphabetInput };
