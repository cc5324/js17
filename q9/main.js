import addTwoArrayItems from "./addArray.js";

main();

function main() {
  const arr1 = [2, 3, 1, 7, 9];
  const arr2 = [8, 7, 9, 3, 1];

  const multiArr = addTwoArrayItems(arr1, arr2);

  console.log(multiArr);
}
