import { getInputAndValidate } from "../syncInput/getInputAndValidate.js";
import { checkPatternInput, checkDirectionInput } from "./checkChoiceInput.js";
import turnPattern from "./turnPattern.js";

main();

function main() {
  const settingPattern = {
    question: "Please choose arrow / heart",
    validators: [checkPatternInput],
  };

  const settingDirection = {
    question: "Please enter up / down / left / right",
    validators: [checkDirectionInput],
  };

  const patternBank = {
    arrow: `
   *
  ***
 *****
*******
  ***
  ***
  ***
`,
    heart: `
  ** **
 *******
*********
*********
 *******
  *****
   ***
    *
`,
  };

  const customizedPattern = getInputAndValidate(settingPattern).toLowerCase();
  const customizedDirection =
    getInputAndValidate(settingDirection).toLowerCase();

  let finalPattern = turnPattern(
    patternBank[customizedPattern],
    customizedDirection
  );

  console.log(finalPattern);
}

// const heart = `
//   ** **
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
// `;

// const arrow = `
//    *
//   ***
//  *****
// *******
//   ***
//   ***
//   ***
// `;
