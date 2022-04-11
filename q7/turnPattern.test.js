import turnPattern from "./turnPattern";

describe("測驗輸入一個對稱圖形(等腰三角形)與方向，輸出轉向後的圖形", () => {
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
