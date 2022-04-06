export default function turnPattern(customizedPattern, customizedDirection) {
  const direction = customizedDirection;
  const pattern = customizedPattern;
  //* 將圖形切割成陣列
  const patternArray = pattern.split("\n");

  //* 移除頭尾的換行空白
  patternArray.pop();
  patternArray.shift();

  //* 找出原圖形的最寬（＝>找陣列中的，最長的子陣列長度）
  //* 根據寬度：建立空白陣列作為模板
  const patternLength = getPatternLength(patternArray);
  const emptyTemplate = Array(patternLength).fill(" ");

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

  //* 根據寬度：將原始圖案的每行陣列變得一樣長
  const padPatternArray = patternArray.map((ele) =>
    ele.replaceAll(" ", "0").padEnd(patternLength, "0")
  );

  //* 生成原版愛心的 dot map
  let originalDotMap = [];

  for (let row = 0; row < padPatternArray.length; row++) {
    let rowArr = [];
    for (let column = 0; column < padPatternArray[row].length; column++) {
      if (padPatternArray[row][column] === "*") {
        var isStar = 1;
      } else {
        var isStar = 0;
      }
      rowArr.push(isStar);
    }

    originalDotMap.push(rowArr);
  }

  //* 生成 reverse 愛心的 dot map (右轉 ＆ 向下轉用)
  const reverseOriginalDotMap = Object.assign([], originalDotMap).reverse();

  function turn(direction) {
    if (direction === "up" || direction === "left") {
      var map = originalDotMap;
    } else {
      var map = reverseOriginalDotMap;
    }
    map.forEach((row, rowIndex) => {
      row.forEach((dot, dotIndex) => {
        //為了要讓他可以讀到 rowIndex 和 dotIndex
        if (direction === "up" || direction === "down") {
          var putOrder = rowIndex;
        } else {
          var putOrder = dotIndex;
        }

        if (dot === 0) {
          emptyTemplate[putOrder] += " ";
        } else {
          emptyTemplate[putOrder] += "*";
        }
      });
    });
    return emptyTemplate.join("\n");
  }

  return turn(direction);
}

///
// const pattern = arrow;

// //* 將圖形切割成陣列
// const patternArray = pattern.split("\n");

// //* 移除頭尾的換行空白
// patternArray.pop();
// patternArray.shift();

// const patternLength = getPatternLength(patternArray);
// const emptyTemplate = Array(patternLength).fill(" ");

// //* 找出原圖形的最寬（＝>找陣列中的，最長子陣列長度）
// function getPatternLength(arrays) {
//   const lengthList = arrays.map((array) => array.length);
//   lengthList.sort(function compare(a, b) {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       return 1;
//     }
//     // a === b
//     return 0;
//   });

//   return lengthList[0];
// }

// const padPatternArray = patternArray.map((ele) =>
//   ele.replaceAll(" ", "0").padEnd(patternLength, "0")
// );

// //! 生成原版愛心的 dot map
// let originalDotMap = [];

// for (let row = 0; row < padPatternArray.length; row++) {
//   let rowArr = [];
//   for (let column = 0; column < padPatternArray[row].length; column++) {
//     if (padPatternArray[row][column] === "*") {
//       var isStar = 1;
//     } else {
//       var isStar = 0;
//     }
//     rowArr.push(isStar);
//   }

//   originalDotMap.push(rowArr);
// }

// const reverseOriginalDotMap = Object.assign([], originalDotMap).reverse();

// let patternRotated = Object.assign([], emptyTemplate);

// function turn(direction) {
//   if (direction === "up" || direction === "right") {
//     var map = originalDotMap;
//   } else {
//     var map = reverseOriginalDotMap;
//   }
//   map.forEach((row, rowIndex) => {
//     row.forEach((dot, dotIndex) => {
//       //為了要讓他可以讀到 rowIndex 和 dotIndex
//       if (direction === "up" || direction === "down") {
//         var putOrder = rowIndex;
//       } else {
//         var putOrder = dotIndex;
//       }

//       if (dot === 0) {
//         patternRotated[putOrder] += " ";
//       } else {
//         patternRotated[putOrder] += "*";
//       }
//     });
//   });
//   return patternRotated.join("\n");
// }

// console.log(turn("down"));

//* 翻轉對照
// const directionArg = {
//   up: {
//     map: originalDotMap,
//     putOrder: rowIndex,
//   },
//   down: {
//     map: reverseOriginalDotMap,
//     putOrder: rowIndex,
//   },
//   left: {
//     map: originalDotMap,
//     putOrder: dotIndex,
//   },
//   right: {
//     map: reverseOriginalDotMap,
//     putOrder: dotIndex,
//   },
// };
