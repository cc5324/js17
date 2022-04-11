import { getInputAndValidate } from "../syncInput/getInputAndValidate.js";
import { checkPatternInput, checkDirectionInput } from "./checkChoiceInput.js";
import { getOptionsInput } from "../syncInput/getOptionsInput.js";
import turnPattern from "./turnPattern.js";

main();

function main() {
  // const settingPattern = {
  //   question: "Please choose arrow / heart / triangle",
  //   validators: [checkPatternInput],
  // };

  // const settingDirection = {
  //   question: "Please enter up / down / left / right",
  //   validators: [checkDirectionInput],
  // };

  const settingPattern = {
    question: "請輸入 arrow / heart / triangle",
    options: ["arrow", "heart", "triangle"],
  };

  const settingDirection = {
    question: "請輸入 up / down / left / right",
    options: ["up", "down", "left", "right"],
  };

  const customizedPattern = getOptionsInput(settingPattern).toLowerCase();
  const customizedDirection = getOptionsInput(settingDirection).toLowerCase();

  // const customizedPattern = getInputAndValidate(settingPattern).toLowerCase();
  // const customizedDirection =
  //   getInputAndValidate(settingDirection).toLowerCase();

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
    triangle: `
  *
 ***
*****
`,
  };

  let finalPattern = turnPattern(
    patternBank[customizedPattern],
    customizedDirection
  );
  console.log(`Before:
${patternBank[customizedPattern]}`);

  console.log(`After:

${finalPattern}
`);
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
