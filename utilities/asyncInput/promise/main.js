import { getInputByPromise } from "./promise.js";
import { checkInteger } from "../../validation/validators.js";
main();

function main() {
  const myInput = getInputByPromise({
    question: "say sth: ",
    validators: [checkInteger],
  });
  myInput
    .then((input) => {
      console.log("here");
      if (input > 10) {
        console.log("比10大");
      } else {
        console.log("比10小");
      }
    })
    .then(console.log(`myInput`, myInput));
}
main();
