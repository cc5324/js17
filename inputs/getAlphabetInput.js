import { checkAlphabet } from "../validation/validateInput.js";

export function getAlphabetInput(question) {
  return getInputAndValidate({ question, validators: [checkAlphabet] });
}
