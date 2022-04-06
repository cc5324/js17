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

const arrow = `
   *
  ***
 *****
*******
  ***
  ***
  ***
`;

const heartArray = arrow.split("\n");

//* 移除頭尾的換行空白
heartArray.pop();
heartArray.shift();

const patternLength = getPatternLength(heartArray);

//* 找出原圖形的最寬（＝>找陣列中的，最長子陣列長度）
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
}

const heartTemplate = Array(patternLength).fill(" ");

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

originalDotMap.forEach((row, rowIndex) => {
  row.forEach((dot, dotIndex) => {
    if (dot[2] === 0) {
      upHeart[dotIndex] += " ";
    } else {
      upHeart[dotIndex] += "*";
    }
  });
});
console.log(upHeart.join("\n"));

//* 歷史遺跡
//! 根據 dot map 印出原版愛心
// let upHeart = Object.assign([], heartTemplate);

// originalDotMap.forEach((row, rowIndex) => {
//   row.forEach((dot, dotIndex) => {
//     if (dot[2] === 0) {
//       upHeart[dotIndex] += " ";
//     } else {
//       upHeart[dotIndex] += "*";
//     }
//   });
// });
// console.log(upHeart.join("\n"));

// console.log(originalDotMap);

//! 根據 dot map.reverse() 印出顛倒愛心
// let downDotMap = Object.assign([], originalDotMap).reverse();

// console.log(downDotMap);

// let downHeart = Object.assign([], heartTemplate);

// downDotMap.forEach((row, rowIndex) => {
//   row.forEach((dot) => {
//     if (dot[2] === 0) {
//       downHeart[rowIndex] += " ";
//     } else {
//       downHeart[rowIndex] += "*";
//     }
//   });
// });

// console.log(downDotMap);
// console.log(originalDotMap);

// console.log(downHeart.join("\n"));

//! 根據 dot map 印出左/右轉愛心
//! 先將 dot map 中的 x, y值交換
// let leftDotMap = [];

// originalDotMap.forEach((row) => {
//   let newRow = row.map((dot) => {
//     let [x, y, isStar] = dot;
//     return [y, -(x + 1), isStar];
//   });
//   leftDotMap.push(newRow);
// });

// let rightDotMap = Object.assign([], leftDotMap);

//! 印出右轉 90 度的愛心
// let rightHeart = Object.assign([], heartTemplate);
// let rightHeart = ["", "", "", "", "", "", "", "", ""];

// console.log(rightDotMap);

// rightDotMap.forEach((row, rowIndex) => {
//   row.forEach((dot, dotIndex) => {
//     if (dot[2] === 0) {
//       rightHeart[dotIndex] += " ";
//     } else {
//       rightHeart[dotIndex] += "*";
//     }
//   });
// });

// console.log(rightHeart.join("\n"));

//! reverse 陣列，印出右轉 90 度的愛心
// leftDotMap = leftDotMap.reverse();

// console.log(leftDotMap);
// let leftHeart = Object.assign([], heartTemplate);
// let leftHeart = ["", "", "", "", "", "", "", "", ""];

// leftDotMap.forEach((row) => {
//   row.forEach((dot, dotIndex) => {
//     if (dot[2] === 0) {
//       leftHeart[dotIndex] += " ";
//     } else {
//       leftHeart[dotIndex] += "*";
//     }
//   });
// });

// console.log(leftHeart.join("\n"));
