import { checkAlphabet } from "../validation/validators.js";
import { getInputAndValidate } from "../asyncInput/getInputAndValidate.js";

import { getEngAlphabetInput } from "../asyncInput/getAlphabetInput.js";

import { rl } from "../asyncInput/readline.js";
import { pickOddCharacter } from "./pickOddCharacter.js";

main();

async function main() {
  console.log("請分別輸入四個英文名字");

  // const setting = {
  //   question: "請輸入英文名字",
  //   validators: [checkAlphabet],
  //   returnType: String,
  // };

  let names = [];
  for (let count = 0; count < 4; count++) {
    // let inputName = await getInputAndValidate(setting);
    let inputName = await getEngAlphabetInput("請輸入英文字母");
    names.push(inputName);
  }

  const targetIndexes = [0, 2];

  names.forEach((name, index) => {
    if (targetIndexes.includes(index)) {
      console.log(
        `第${index + 1}個名字的單數個字母有:${pickOddCharacter(name)}`
      );
    }
  });

  // const iterator = names.entries();
  // for (let [key, value] of iterator) {
  //   if (targetIndex.includes(key)) {
  //     console.log(
  //       `第${key + 1}個名字的單數個字母有:${pickOddCharacter(value)}`
  //     );
  //   }
  // }

  // const firstName = names[0];
  // const secondName = names[2];

  // console.log(
  //   `第${names.indexOf(firstName) + 1}個名字的單數個字母有:${pickOddCharacter(
  //     firstName
  //   )}`
  // );
  // console.log(
  //   `第${names.indexOf(secondName) + 1}個名字的單數個字母有:${pickOddCharacter(
  //     secondName
  //   )}`
  // );
  rl.close();
}
