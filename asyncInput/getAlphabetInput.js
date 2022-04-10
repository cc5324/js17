import { checkAlphabet } from "../validation/validators.js";
import { getInputAndValidate } from "./getInputAndValidate.js";

function getEngAlphabetInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkAlphabet],
    returnType: String,
  });
}

export { getEngAlphabetInput };
