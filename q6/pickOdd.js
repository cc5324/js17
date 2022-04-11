function pickOddItems(array) {
  return array.filter((item, index) => index % 2 === 0);
}

function pickOddCharacter(string) {
  let pickResult = "";
  for (let num = 0; num < string.length; num += 2) {
    pickResult += string[num];
  }
  return pickResult;
}

export { pickOddItems, pickOddCharacter };
