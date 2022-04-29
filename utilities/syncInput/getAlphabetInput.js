import { getValidatedInput } from "./getValidatedInput.js";
import {
  checkAlphabet,
  checkAlphabetSentences,
} from "../validation/validators.js";

function getAlphabetInput(question) {
  return getValidatedInput({ question, validators: [checkAlphabet], String });
}

function getAlphabetSentenceInput(question) {
  return getValidatedInput({
    question,
    validators: [checkAlphabetSentences],
    String,
  });
}

export { getAlphabetInput, getAlphabetSentenceInput };
