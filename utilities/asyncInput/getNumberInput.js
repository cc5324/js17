import {
  checkInteger,
  checkPositive,
  checkNotNegative,
} from "../validation/validators.js";
import { getFormattedInput } from "./getFormattedInput.js";

function getIntegerInput(question) {
  return getFormattedInput({
    question,
    validators: [checkInteger],
    returnType: Number,
  });
}

function getNaturalNumberInput(question) {
  return getFormattedInput({
    question,
    validators: [checkInteger, checkNotNegative],
    returnType: Number,
  });
}

function getPositiveIntegerInput(question) {
  return getFormattedInput({
    question,
    validators: [checkInteger, checkPositive],
    returnType: Number,
  });
}

export { getIntegerInput, getNaturalNumberInput, getPositiveIntegerInput };
