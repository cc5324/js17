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

function foo(question, array) {}

foo("測試輸入$array，輸出$expected", [
  { array: [1, 2, 3], expected: [1, 3] },
  { array: [1], expected: [1] },
  { array: ["a", "b", "c", "d", "e"], expected: ["a", "c", "e"] },
  { array: [], expected: [] },
]);
