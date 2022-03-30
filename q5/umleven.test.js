import { umleven } from "./umleven";

describe("測試輸入 n， 印出 2*4 + 4*6 + 6*8...+(n-2)*n 的總和", () => {
  test("輸入 4，輸出總和為 8", () => {
    const inputNum = 4;
    const outputSum = umleven(inputNum);

    const expectOutputSum = 8;

    expect(outputSum).toBe(expectOutputSum);
  });

  test("輸入 8，輸出總和為 80", () => {
    const inputNum = 8;
    const outputSum = umleven(inputNum);

    expect(outputSum).toBe(80);
  });

  test("輸入 12，輸出總和為 280", () => {
    expect(umleven(12)).toBe(280);
  });
});
