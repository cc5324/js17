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
  const rotatedPatternWidth = getRotatedPatternWidth(patternArray, direction);
  const emptyTemplate = Array(rotatedPatternWidth).fill("");

  function getRotatedPatternWidth(arrays, direction) {
    if (direction === "up" || direction === "down") {
      return arrays.length;
    } else {
      const lengthList = arrays.map((array) => array.length);
      lengthList.sort(function compare(a, b) {
        return b - a;
      });
      return lengthList[0];
    }
  }

  //* 根據寬度：將原始圖案的每行陣列變得一樣長
  const padPatternArray = patternArray.map((ele) =>
    ele.replaceAll(" ", "0").padEnd(rotatedPatternWidth, "0")
  );

  //* 根據原始圖形生成座標圖檔
  const originalDotMap = getPatternDotMap(padPatternArray);

  function getPatternDotMap(padPatternArray) {
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
    return originalDotMap;
  }

  function turn(direction, dotMap) {
    let map = dotMap;
    if (direction === "up" || direction === "left") {
      map = dotMap;
    } else {
      map = dotMap.reverse();
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

  return turn(direction, originalDotMap);
}

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
