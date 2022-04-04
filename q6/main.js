import { checkNotEmpty } from "../validation/validateInput.js";
// import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { getInputAndValidate } from "../readline/getInputAndValidate.js";
import { rl } from "../readline/readline.js";

main();

async function main() {
  console.log("請分別輸入四個英文名字");

  const setting = {
    question: "請輸入英文名字",
    validators: [checkNotEmpty],
    returnType: String,
  };

  let names = [];
  for (let count = 1; count <= 4; count++) {
    let inputName = await getInputAndValidate(setting);
    names.push(inputName);
  }

  // const firstName = names[0];
  const secondName = names[2];

  const firstName = {
    fullName: names[0],
    arrayIndex: 0,
    inputOrder: 1,
    oddCharacter: pickOddCharacter(names[0]),
  };

  console.log(
    `第${firstName.inputOrder}個名字的單數個字母有:${firstName.oddCharacter}`
  );
  // console.log(
  //   `第${names.indexOf(firstName) + 1}個名字的單數個字母有:${pickOddCharacter(
  //     firstName
  //   )}`
  // );
  console.log(
    `第${names.indexOf(secondName) + 1}個名字的單數個字母有:${pickOddCharacter(
      secondName
    )}`
  );
  rl.close();
}

function pickOddCharacter(string) {
  let pickResult = "";
  for (let num = 1; num <= string.length; num++) {
    if (num % 2 === 1) {
      pickResult += string.slice(num, num + 1);
    }
  }
  return pickResult;
}
