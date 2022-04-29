import { checkAlphabet } from "../validation/validators.js";
import { getValidatedInput } from "./getValidatedInput.js";

function getAlphabetInput(question) {
  return getValidatedInput({
    question,
    validators: [checkAlphabet],
  });
}

export { getAlphabetInput };
