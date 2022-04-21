import { getOptionsInput } from "../utilities/syncInput/getOptionsInput.js";
import turnPattern from "./turnPattern.js";

main();

function main() {
  const customizedPattern = getOptionsInput(["arrow", "heart", "triangle"]);
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
1
12
123
1234
`,
  };
  let originalPattern = patternBank[customizedPattern];

  let finalPattern = turnPattern(originalPattern, customizedDirection);
  console.log(`Before:
${originalPattern}`);

  console.log(`After:\n
${finalPattern}
`);
}
