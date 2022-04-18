import { getFormattedInput } from "./getFormattedInput.js";
import {
  checkAlphabet,
  checkAlphabetSentences,
} from "../validation/validators.js";

function getAlphabetInput(question) {
  return getFormattedInput({ question, validators: [checkAlphabet], String });
}

function getAlphabetSentenceInput(question) {
  return getFormattedInput({
    question,
    validators: [checkAlphabetSentences],
    String,
  });
}

export { getAlphabetInput, getAlphabetSentenceInput };
