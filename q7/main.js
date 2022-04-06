// main();

// function main() {

// }

const heart = `
  ** **
 *******
*********
*********
 *******
  *****
   ***
    *
`;

const house = `
    *
   ***
  *****
**********
**********
**********
**********
`;

const heartArray = heart.split("\n");

heartArray.pop();
heartArray.shift();

const patternLength = getPatternLength(heartArray);

function getPatternLength(arrays) {
  const lengthList = arrays.map((array) => array.length);
  lengthList.sort(function compare(a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    // a === b
    return 0;
  });

  return lengthList[0];
  // const template = Array(lengthList[0]);
  // for (let index = 0; index < lengthList[0]; i++) {}
}

const heartTemplate = ["", "", "", "", "", "", "", "", ""];

const padHeartArray = heartArray.map((ele) =>
  ele.replaceAll(" ", "0").padEnd(patternLength, "0")
);

//! 生成原版愛心的 dot map
let originalDotMap = [];

for (let row = 0; row < padHeartArray.length; row++) {
  let rowArr = [];
  for (let column = 0; column < padHeartArray[row].length; column++) {
    if (padHeartArray[row][column] === "*") {
      var isStar = 1;
    } else {
      var isStar = 0;
    }
    rowArr.push([row, column, isStar]);
  }

  originalDotMap.push(rowArr);
}

//! 根據 dot map 印出原版愛心
let upHeart = Object.assign([], heartTemplate);

originalDotMap.forEach((row) => {
  row.forEach((dot) => {
    if (dot[2] === 0) {
      upHeart[dot[0]] += " ";
    } else {
      upHeart[dot[0]] += "*";
    }
  });
});
console.log(upHeart.join("\n"));

// console.log(originalDotMap);

//! 根據 dot map 印出左/右轉愛心
//! 先將 dot map 中的 x, y值交換
let leftDotMap = [];

originalDotMap.forEach((row) => {
  let newRow = row.map((dot) => {
    let [x, y, isStar] = dot;
    return [y, -(x + 1), isStar];
  });
  leftDotMap.push(newRow);
});

let rightDotMap = leftDotMap;

//! 印出右轉 90 度的愛心
let rightHeart = Object.assign([], heartTemplate);
// let rightHeart = ["", "", "", "", "", "", "", "", ""];

rightDotMap.forEach((row) => {
  row.forEach((dot) => {
    if (dot[2] === 0) {
      rightHeart[dot[0]] += " ";
    } else {
      rightHeart[dot[0]] += "*";
    }
  });
});

console.log(rightHeart.join("\n"));

//! reverse 陣列，印出右轉 90 度的愛心
leftDotMap = leftDotMap.reverse();

// console.log(leftDotMap);
let leftHeart = Object.assign([], heartTemplate);
// let leftHeart = ["", "", "", "", "", "", "", "", ""];

leftDotMap.forEach((row) => {
  row.forEach((dot) => {
    if (dot[2] === 0) {
      leftHeart[dot[0]] += " ";
    } else {
      leftHeart[dot[0]] += "*";
    }
  });
});

console.log(leftHeart.join("\n"));

// for (let row of leftDotMap) {
//   row.forEach((dot) => {
//     if (dot[2] === 0) {
//       leftHeart[dot[0]] += " ";
//     } else {
//       leftHeart[dot[0]] += "*";
//     }
//   });
//   console.log(leftHeart);
// }

// const dotMap = [
//   [
//     //row 1
//     [1, 0, 0],
//     [1, 1, 0],
//     [1, 2, 1],
//     [1, 3, 1],
//     [1, 4, 0],
//     [1, 5, 1],
//     [1, 6, 1],
//     [1, 7, 0],
//     [1, 8, 0],
//   ],
//   [
//     //row 2
//     [2, 0, 0],
//     [2, 1, 1],
//     [2, 2, 1],
//     [2, 3, 1],
//     [2, 4, 1],
//     [2, 5, 1],
//     [2, 6, 1],
//     [2, 7, 1],
//     [2, 8, 0],
//   ],
//   [
//     //row 3
//     [3, 0, 1],
//     [3, 1, 1],
//     [3, 2, 1],
//     [3, 3, 1],
//     [3, 4, 1],
//     [3, 5, 1],
//     [3, 6, 1],
//     [3, 7, 1],
//     [3, 8, 1],
//   ],
//   [
//     //row 4
//     [4, 0, 1],
//     [4, 1, 1],
//     [4, 2, 1],
//     [4, 3, 1],
//     [4, 4, 1],
//     [4, 5, 1],
//     [4, 6, 1],
//     [4, 7, 1],
//     [4, 8, 1],
//   ],
//   [
//     //row 5
//     [5, 0, 0],
//     [5, 1, 1],
//     [5, 2, 1],
//     [5, 3, 1],
//     [5, 4, 1],
//     [5, 5, 1],
//     [5, 6, 1],
//     [5, 7, 1],
//     [5, 8, 0],
//   ],
//   [
//     //row 6
//     [6, 0, 0],
//     [6, 1, 0],
//     [6, 2, 1],
//     [6, 3, 1],
//     [6, 4, 1],
//     [6, 5, 1],
//     [6, 6, 1],
//     [6, 7, 0],
//     [6, 8, 0],
//   ],
//   [
//     //row 7
//     [7, 0, 0],
//     [7, 1, 0],
//     [7, 2, 0],
//     [7, 3, 1],
//     [7, 4, 1],
//     [7, 5, 1],
//     [7, 6, 0],
//     [7, 7, 0],
//     [7, 8, 0],
//   ],
//   [
//     //row 8
//     [8, 0, 0],
//     [8, 1, 0],
//     [8, 2, 0],
//     [8, 3, 0],
//     [8, 4, 1],
//     [8, 5, 0],
//     [8, 6, 0],
//     [8, 7, 0],
//     [8, 8, 0],
//   ],
// ];
