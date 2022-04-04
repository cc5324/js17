import {
  checkInteger,
  checkNotEmpty,
  checkDecimalNumber,
  checkPositive,
  checkNotNegative,
  checkEven,
  checkOverNum,
} from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";

function getIntegerInput(question) {
  return getInputAndValidate({ question, validators: [checkInteger] });
}

function getNaturalNumberInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkInteger, checkNotNegative],
  });
}

function getPositiveIntegerInput(question) {
  return getInputAndValidate({
    question,
    validators: [checkInteger, checkPositive],
  });
}

export { getIntegerInput, getNaturalNumberInput, getPositiveIntegerInput };
