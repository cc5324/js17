import { getRandomInteger } from "../getRandomInteger";
//! min max 寫反沒有差別
describe("測試輸入指定整數邊界，Math.random()指定回傳 0.5，輸出對應整數", () => {
  beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
  });

  test.each([
    { floor: 0, ceiling: 5, expected: 2 },
    { floor: 2, ceiling: 10, expected: 6 },
    { floor: 1, ceiling: 1, expected: 1 },
    { floor: -4, ceiling: -1, expected: -3 },
    { floor: 4, ceiling: 1, expected: 2 },
  ])(
    "輸入下限 $floor 和 上限 $ceiling，輸出 $expected",
    ({ floor, ceiling, expected }) => {
      expect(getRandomInteger(floor, ceiling)).toBe(expected);
    }
  );
});

describe("測試輸入指定整數邊界，輸出指定範圍內的隨機整數", () => {
  test.each([
    { numberA: 0, numberB: 5 },
    { numberA: 2, numberB: 10 },
    { numberA: -4, numberB: -1 },
    { numberA: 4, numberB: 1 },
    { numberA: 0, numberB: -10 },
  ])(
    "輸入 $numberA 和 $numberB，輸出兩者區間的隨機數字（不含數字較大者）",
    ({ numberA, numberB }) => {
      const floor = Math.min(numberA, numberB);
      const ceiling = Math.max(numberA, numberB);
      expect(getRandomInteger(numberA, numberB)).toBeLessThan(ceiling);
      expect(getRandomInteger(numberA, numberB)).toBeGreaterThanOrEqual(floor);
    }
  );

  test.each([{ number: 0 }, { number: 1 }, { number: 10 }, { number: -10 }])(
    "輸入相同上、下限 $number，應輸出 $number",
    ({ number }) => {
      expect(getRandomInteger(number, number)).toBe(number);
    }
  );
});
