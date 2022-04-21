import { addTwoDiffArrayItems } from "./addArray.js";

main();

function main() {
  const array1 = [2, 3, 1, 7, 9];
  const array2 = [8, 7, 9, 3, 1];

  const mergedArray = addTwoDiffArrayItems(array1, array2);

  console.log(mergedArray);
}
