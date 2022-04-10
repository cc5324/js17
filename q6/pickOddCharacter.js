export function pickOddCharacter(string) {
  let pickResult = "";
  for (let num = 0; num < string.length; num += 2) {
    pickResult += string[num];
  }
  return pickResult;
}
