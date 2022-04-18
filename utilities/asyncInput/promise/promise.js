import { rl } from "../readline.js";
import { checkNotEmpty } from "../../validation/validators.js";
// import { getInput, validateInput } from "../syncInput/getFormattedInput.js";

let getInput = (question) => {
  return new Promise((resolve) => {
    const userInput = rl.question(question);
    // console.log(`userInput`, userInput);
    resolve(userInput);
    // return userInput;
  });
};

function validateInput(input, validators = [checkNotEmpty]) {
  return new Promise((resolve) => {
    validators.forEach((validator) => {
      validator(input);
    });
    console.log(`input`, input);
    resolve(input);
  });
}

// function getInputByPromise({ question, validators = [checkNotEmpty] }) {
//   let userInput = getInput(question).then((res) => {
//     validateInput(res).catch((error) => {
//       console.log(error.message);
//       return getInputByPromise({ question, validators });
//     });
//     console.log(`res`, res);
//     return res;
//   });
// }

export function getInputByPromise({ question, validators = [checkNotEmpty] }) {
  return new Promise((resolve) => {
    getInput(question).then((res) => {
      validateInput(res)
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((error) => {
          console.log(error.message);
          return getInputByPromise({ question, validators });
        });

      console.log(`res`, res);
      resolve(res);
    });
  });
}

const myInput = getInputByPromise({
  question: "say sth: ",
  validators: [checkNotEmpty],
});

myInput.then((res) => {
  console.log(`last myInput`, res);
  rl.close();
});
