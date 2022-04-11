const arrow = `
   *
  ***
 *****
*******
  ***
  ***
  ***
  ***
`;

// console.log(turnPattern(arrow, "left"));

export default function turnPattern(customizedPattern, customizedDirection) {
  const direction = customizedDirection;
  const pattern = customizedPattern;
  const rotatedPatternWidth = getRotatedPatternWidth(
    pattern.split("\n").filter((row) => row),
    direction
  );

  // console.log(rotatedPatternWidth);

  //* 將圖形切割成陣列
  //* 移除頭尾空白
  //* 根據原始圖形生成二維陣列
  let dotMap = pattern
    .split("\n")
    .filter((row) => row)
    .map((row) => row.padEnd(rotatedPatternWidth, " "))
    .map((row) => Array.from(row));
  // console.log(`dotMap`, dotMap);

  let map =
    direction === "up" || direction === "left" ? dotMap : dotMap.reverse();
  // console.log("dotmap", dotMap);

  const emptyTemplate = Array(rotatedPatternWidth).fill("");
  // console.log("emptyTemplate", emptyTemplate);

  map.forEach((row, rowIndex) => {
    row.forEach((dot, dotIndex) => {
      let putOrder =
        direction === "up" || direction === "down" ? rowIndex : dotIndex;

      emptyTemplate[putOrder] += dot;
    });
  });

  return emptyTemplate.join("\n");
}

//* 找出原圖形的最寬（＝>找陣列中的，最長的子陣列長度）
//* 根據寬度：建立空白陣列作為模板
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
