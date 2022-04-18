import { addTwoDiffArrayItems } from "./addArray.js";

main();

function main() {
  const arr1 = [2, 3, 1, 7, 9];
  const arr2 = [8, 7, 9, 3, 1];

  const multiArr = addTwoDiffArrayItems(arr1, arr2);

  console.log(multiArr);
  console.log(arr1);
  console.log(arr2);
}
