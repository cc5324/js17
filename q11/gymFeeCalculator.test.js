import { gymFeeCalculator } from "./gymFeeCalculator";

describe("測試好想健身房會費計算，基本會費 500 元，第一期 79 折，滿五期折兩百", () => {
  test.each([
    { periods: 1, fee: 395 },
    { periods: 2, fee: 895 },
    { periods: 3, fee: 1395 },
    { periods: 4, fee: 1895 },
    { periods: 5, fee: 2195 },
    { periods: 6, fee: 2695 },
    { periods: 7, fee: 3195 },
    { periods: 8, fee: 3695 },
    { periods: 9, fee: 4195 },
    { periods: 10, fee: 4495 },
  ])("測試輸入 $periods, 輸出 $fee", ({ periods, fee }) => {
    expect(gymFeeCalculator(periods)).toBe(fee);
  });
});
