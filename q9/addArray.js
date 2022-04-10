//* 用 array.map()
//* Array 長度須相同
// function addTwoArrayItems(arr1, arr2) {
//   let multiArr = arr1.map((item, index) => (item += arr2[index]));
//   return multiArr;
// }

//* array 長度可以不同
function addTwoArrayItems(arr1, arr2) {
  const desiredLength = Math.max(arr1.length, arr2.length);
  while (arr1.length < desiredLength) arr1.push(0);
  while (arr2.length < desiredLength) arr2.push(0);
  let multiArr = arr1.map((item, index) => (item += arr2[index]));
  return multiArr;
}

// * 用 for ... of ...
// function addTwoArrayItems(arr1, arr2) {
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

export { addTwoArrayItems };
