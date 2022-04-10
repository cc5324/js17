import {
  checkInteger,
  checkPositive,
  checkNotNegative,
} from "../validation/validators.js";
import { getInputAndValidate } from "./getInputAndValidate.js";

function getIntegerInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkInteger],
    returnType: Number,
  });
}

function getNaturalNumberInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkInteger, checkNotNegative],
    returnType: Number,
  });
}

function getPositiveIntegerInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkInteger, checkPositive],
    returnType: Number,
  });
}

export { getIntegerInput, getNaturalNumberInput, getPositiveIntegerInput };
