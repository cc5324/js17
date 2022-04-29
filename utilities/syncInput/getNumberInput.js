import {
  checkInteger,
  checkPositive,
  checkNotNegative,
} from "../validation/validators.js";
import { getValidatedInput } from "./getValidatedInput.js";

function getIntegerInput(question) {
  return getValidatedInput({
    question,
    validators: [checkInteger],
    returnType: Number,
  });
}

function getNaturalNumberInput(question) {
  return getValidatedInput({
    question,
    validators: [checkInteger, checkNotNegative],
    returnType: Number,
  });
}

function getPositiveIntegerInput(question) {
  return getValidatedInput({
    question,
    validators: [checkInteger, checkPositive],
    returnType: Number,
  });
}

export { getIntegerInput, getNaturalNumberInput, getPositiveIntegerInput };
