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
  // console.log(`rotatedPatternWidth`, rotatedPatternWidth);

  //* 將圖形切割成陣列
  //* 移除頭尾空白
  //* 根據原始圖形生成二維陣列
  const dotMap = pattern
    .split("\n")
    .filter((row) => row)
    .map((row) => row.padEnd(rotatedPatternWidth, " "))
    .map((row) => Array.from(row));
  // console.log(`dotMap`, dotMap);

  //* 創造空盒子（裝翻轉後的圖案）
  const emptyTemplate = Array(rotatedPatternWidth).fill("");
  // console.log("emptyTemplate", emptyTemplate);

  //* 根據方向做翻轉
  switch (direction) {
    case "up":
      dotMap.forEach((row, rowIndex) => {
        row.forEach((dot) => {
          emptyTemplate[rowIndex] += dot;
        });
      });
      break;

    case "down":
      dotMap.reverse().forEach((row, rowIndex) => {
        row.forEach((dot, dotIndex) => {
          emptyTemplate[rowIndex] += dot;
        });
      });
      break;

    case "right":
      dotMap.reverse().forEach((row) => {
        row.forEach((dot, dotIndex) => {
          emptyTemplate[dotIndex] += dot;
        });
      });
      break;

    case "left":
      dotMap.forEach((row) => {
        row.reverse().forEach((dot, dotIndex) => {
          emptyTemplate[dotIndex] += dot;
        });
      });
      break;
  }
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

/*
//! old version 
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
  const dotMap = pattern
    .split("\n")
    .filter((row) => row)
    .map((row) => row.padEnd(rotatedPatternWidth, " "))
    .map((row) => Array.from(row));
  // console.log(`dotMap`, dotMap);

  const map =
    direction === "up" || direction === "left" ? dotMap : dotMap.reverse();
  // console.log("dotmap", dotMap);

  const emptyTemplate = Array(rotatedPatternWidth).fill("");
  // console.log("emptyTemplate", emptyTemplate);

  map.forEach((row, rowIndex) => {
    row.forEach((dot, dotIndex) => {
      const putOrder =
        direction === "up" || direction === "down" ? rowIndex : dotIndex;

      emptyTemplate[putOrder] += dot;
    });
  });

  return emptyTemplate.join("\n");
}
*/

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
