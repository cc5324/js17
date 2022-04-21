import { getAlphabetInput } from "../utilities/asyncInput/getAlphabetInput.js";

import { readline } from "../utilities/asyncInput/readline.js";
import { pickOddItems, pickOddCharacter } from "./pickOdd.js";

main();

async function main() {
  console.log("請分別輸入四個英文名字");

  let names = [];
  for (let amount = 0; amount < 4; amount++) {
    let inputName = await getAlphabetInput("請輸入英文字母");
    names.push(inputName);
  }

  //* version2
  let oddCharacterNames = names
    .map((name) => Array.from(name))
    .map(pickOddItems);
  // console.log(`oddCharacterNames`, oddCharacterNames);

  let [firstNameOddCharacter, thirdNameOddCharacter] =
    pickOddItems(oddCharacterNames);

  console.log(`第一個英文名字的單數個字母有 ${firstNameOddCharacter.join("")}`);
  console.log(`第三個英文名字的單數個字母有 ${thirdNameOddCharacter.join("")}`);
  readline.close();
}
