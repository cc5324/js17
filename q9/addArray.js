//* 用 array.map()
//* Array 長度須相同
function addTwoArrayItems(array1, array2) {
  let mergedArray = array1.map((item, index) => (item += array2[index]));
  return mergedArray;
}

//* array 長度可以不同
function addTwoDiffArrayItems(array1, array2) {
  let itemsLength = Math.max(array1.length, array2.length);
  let mergedArray = [];
  for (let index = 0; index < itemsLength; index++) {
    mergedArray.push((array1[index] || 0) + (array2[index] || 0));
  }
  return mergedArray;
}

export { addTwoArrayItems, addTwoDiffArrayItems };
