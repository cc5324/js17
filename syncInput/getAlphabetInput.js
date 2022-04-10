import { getInputAndValidate } from "./getInputAndValidate.js";
import { checkAlphabet } from "../validation/validators.js";

export function getAlphabetInput(question) {
  return getInputAndValidate({ question, validators: [checkAlphabet], String });
}
