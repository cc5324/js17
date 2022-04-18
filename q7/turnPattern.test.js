import turnPattern from "./turnPattern";
import { getRotatedPatternSides } from "./turnPattern.js";

describe("測驗輸入一個等腰三角形與方向，輸出轉向後的圖形", () => {
  const inputPattern = `
  *  
 *** 
*****
`;
  test("輸入 'up' 應印出原始圖案", () => {
    const expectPattern = `  *  
 *** 
*****`;
    expect(turnPattern(inputPattern, "up")).toBe(expectPattern);
  });

  test("輸入 'down'，應印出上下翻轉的圖案", () => {
    const expectPattern = `*****
 *** 
  *  `;
    expect(turnPattern(inputPattern, "down")).toBe(expectPattern);
  });

  test("輸入 'left'，應印出向左轉的圖案", () => {
    const expectPattern = `  *
 **
***
 **
  *`;
    expect(turnPattern(inputPattern, "left")).toBe(expectPattern);
  });

  test("輸入 'right'，應印出向右轉的圖案", () => {
    const expectPattern = `*  
** 
***
** 
*  `;
    expect(turnPattern(inputPattern, "right")).toBe(expectPattern);
  });
});

describe("測驗輸入一個等腰三角形與方向，輸出轉向後的圖形長寬", () => {
  const pattern = `
  *
 ***
*****
`;
  let input = pattern.split("\n").filter((row) => row);

  test("輸入 'up' ，應輸出正確長寬", () => {
    const expected = {
      rotatedPatternHeight: 3,
      patternWidth: 5,
    };
    expect(getRotatedPatternSides(input, "up")).toEqual(expected);
  });

  test("輸入 'down'，應輸出正確長寬", () => {
    const expected = {
      rotatedPatternHeight: 3,
      patternWidth: 5,
    };
    expect(getRotatedPatternSides(input, "down")).toEqual(expected);
  });

  test("輸入 'left'，應輸出正確長寬", () => {
    const expected = {
      rotatedPatternHeight: 5,
      patternWidth: 5,
    };
    expect(getRotatedPatternSides(input, "left")).toEqual(expected);
  });

  test("輸入 'right'，應輸出正確長寬", () => {
    const expected = {
      rotatedPatternHeight: 5,
      patternWidth: 5,
    };
    expect(getRotatedPatternSides(input, "right")).toEqual(expected);
  });
});
