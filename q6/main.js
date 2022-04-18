import { checkAlphabet } from "../utilities/validation/validators.js";
import { getFormattedInput } from "../utilities/asyncInput/getFormattedInput.js";

import { getEngAlphabetInput } from "../utilities/asyncInput/getAlphabetInput.js";

import { rl } from "../utilities/asyncInput/readline.js";
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
  for (let amount = 0; amount < 4; amount++) {
    // let inputName = await getFormattedInput(setting);
    let inputName = await getEngAlphabetInput("請輸入英文字母");
    names.push(inputName);
  }

  //* version2
  // let oddCharacterNames = names
  //   .map((name) => Array.from(name))
  //   .map(pickOddCharacter);
  // console.log(`oddCharacterNames`, oddCharacterNames);

  // let [firstNameOddCharacter, thirdNameOddCharacter] =
  //   pickOddItems(oddCharacterNames);

  // console.log(`第一個英文名字的單數個字母有 ${firstNameOddCharacter}`);
  // console.log(`第三個英文名字的單數個字母有 ${thirdNameOddCharacter}`);

  //* version1
  names.forEach((name, index) => {
    if (index % 2 === 0) {
      console.log(
        `第${index + 1}個名字的單數個字母有:${pickOddCharacter(name)}`
      );
    }
  });
  rl.close();
}
