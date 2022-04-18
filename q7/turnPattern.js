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

const triangle = `
1
12
123
1234
`;

// console.log(turnPattern(triangle, "left"));
// console.log(turnPattern(heart, "right"));

export default function turnPattern(customizedPattern, customizedDirection) {
  const direction = customizedDirection;
  const pattern = customizedPattern;

  const { patternWidth, rotatedPatternHeight } = getRotatedPatternSides(
    pattern.split("\n").filter((row) => row),
    direction
  );

  // console.log(`patternWidth`, patternWidth);
  // console.log(`rotatedPatternHeight`, rotatedPatternHeight);

  //* 將圖形切割成陣列
  //* 移除頭尾空白
  //* 根據原始圖形生成二維陣列
  const dotMap = pattern
    .split("\n")
    .filter((row) => row)
    .map((row) => row.padEnd(patternWidth, " "))
    .map((row) => Array.from(row));
  console.log(`dotMap`, dotMap);

  //* 創造空盒子（裝翻轉後的圖案）
  const emptyTemplate = Array(rotatedPatternHeight).fill("");
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
        row.forEach((dot) => {
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
export function getRotatedPatternSides(arrays, direction) {
  const lengthList = Object.assign(arrays)
    .map((array) => array.length)
    .sort(function compare(a, b) {
      return b - a;
    });
  if (direction === "up" || direction === "down") {
    return {
      patternWidth: lengthList[0],
      rotatedPatternHeight: arrays.length,
    };
  } else {
    return {
      patternWidth: lengthList[0],
      rotatedPatternHeight: lengthList[0],
    };
  }
}
