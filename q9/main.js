function main() {
  const arr1 = [2, 3, 1, 7, 9];
  const arr2 = [8, 7, 9, 3, 1];

  const multiArr = addArray(arr1, arr2);

  console.log(multiArr);
}
// ! array 長度不同的處理？

// * 用 array.map()
function addArray(arr1, arr2) {
  let multiArr = arr1.map((item, index) => (item += arr2[index]));
  return multiArr;
}

// * 用 for ... of ...
// function addArray(arr1, arr2) {
//   let multiArray = [];
//   for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//     if (!arr1[i]) {
//       arr1[i] = 0;
//     }
//     if (!arr2[i]) {
//       arr2[i] = 0;
//     }
//     const newItem = arr1[i] + arr2[i];
//     multiArray.push(newItem);
//   }
//   return multiArray;
// }

main();
