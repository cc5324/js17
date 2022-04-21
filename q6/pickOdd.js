function pickOddItems(array) {
  return array.filter((item, index) => index % 2 === 0);
}

function pickOddCharacter(string) {
  return Array.from(string)
    .filter((character, index) => index % 2 === 0)
    .join("");
  // let pickResult = "";
  // for (let num = 0; num < string.length; num += 2) {
  //   pickResult += string[num];
  // }
  // return pickResult;
}

export { pickOddItems, pickOddCharacter };
