//* 用 array.map()
//* Array 長度須相同
function addTwoArrayItems(arr1, arr2) {
  let multiArr = arr1.map((item, index) => (item += arr2[index]));
  return multiArr;
}

//* array 長度可以不同
function addTwoDiffArrayItems(arr1, arr2) {
  let longArray = arr1.length > arr2.length ? arr1 : arr2;
  let shortArray = arr1.length <= arr2.length ? arr1 : arr2;
  shortArray.forEach((element, index) => {
    longArray[index] += element;
  });
  return longArray;
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

export { addTwoArrayItems, addTwoDiffArrayItems };
