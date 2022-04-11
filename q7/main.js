// import { getInputAndValidate } from "../syncInput/getInputAndValidate.js";
// import { checkPatternInput, checkDirectionInput } from "./checkChoiceInput.js";
import { getOptionsInput } from "../syncInput/getOptionsInput.js";
import turnPattern from "./turnPattern.js";

main();

function main() {
  // const settingPattern = {
  //   question: "請輸入 arrow / heart / triangle / S",
  //   options: ["arrow", "heart", "triangle", "s"],
  // };

  // const settingDirection = {
  //   question: "請輸入 up / down / left / right",
  //   options: ["up", "down", "left", "right"],
  // };

  // const customizedPattern = getOptionsInput(settingPattern);
  // const customizedDirection = getOptionsInput(settingDirection);

  const customizedPattern = getOptionsInput([
    "arrow",
    "heart",
    "triangle",
    "s",
  ]);
  const customizedDirection = getOptionsInput(["up", "down", "left", "right"]);

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
    s: `
  *****
 **   *1
 **
  *****
     ***
2*   **
 ****  
`,
  };
  let originalPattern = patternBank[customizedPattern];

  let finalPattern = turnPattern(originalPattern, customizedDirection);
  console.log(`Before:
${originalPattern}`);

  console.log(`After:

${finalPattern}
`);
}
