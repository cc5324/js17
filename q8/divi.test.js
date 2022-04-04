describe("輸入一正整數 n，輸出最少要除以幾次 3 ，小數點後第 2 位會等於 0", () => {
  test("輸入 3，應輸出 1", () => {
    const input = 3;
    const expectOutput = 1;

    expect(divi(input)).toBe(expectOutput);
  });

  test("輸入 2，應輸出 5", () => {
    const input = 2;
    const expectOutput = 5;

    expect(divi(input)).toBe(expectOutput);
  });
});
