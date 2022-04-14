import { checkAlphabet } from "../validation/validators.js";
import { getFormattedInput } from "./getFormattedInput.js";

function getEngAlphabetInput(question) {
  return getFormattedInput({
    question,
    validators: [checkAlphabet],
    returnType: String,
  });
}

export { getEngAlphabetInput };
