import { checkAlphabet } from "../validation/validators.js";
import { getInputAndValidate } from "../asyncInput/getInputAndValidate.js";

import { getEngAlphabetInput } from "../asyncInput/getAlphabetInput.js";

import { rl } from "../asyncInput/readline.js";
import { pickOddItems, pickOddCharacter } from "./pickOdd.js";

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

  //* 修改版本
  let oddCharacterNames = names
    .map((name) => Array.from(name))
    .map(pickOddCharacter);
  console.log(`oddCharacterNames`, oddCharacterNames);

  let [firstNameOddCharacter, thirdNameOddCharacter] =
    pickOddItems(oddCharacterNames);

  console.log(`第一個英文名字的單數個字母有 ${firstNameOddCharacter}`);
  console.log(`第三個英文名字的單數個字母有 ${thirdNameOddCharacter}`);

  //* 原始版本
  // const targetIndexes = [0, 2];

  // names.forEach((name, index) => {
  //   if (targetIndexes.includes(index)) {
  //     console.log(
  //       `第${index + 1}個名字的單數個字母有:${pickOddCharacter(name)}`
  //     );
  //   }
  // });
  rl.close();
}
