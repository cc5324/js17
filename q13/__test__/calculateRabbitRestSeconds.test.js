import {
  calculateRabbitRestSeconds,
  complexCalculateRabbitRestSeconds,
} from "./calculateRabbitRestSeconds.js";

describe("測試輸入龜兔賽跑的比賽距離，輸出兔子在贏得比賽的前提下，可休息的秒數", () => {
  test.each([
    { raceDistance: 1000, expected: 3520 },
    { raceDistance: 28, expected: 98 },
    { raceDistance: 198, expected: 697 },
  ])(
    "測試輸入比賽距離 $raceDistance 公尺，輸出可偷懶 $expected 秒",
    ({ raceDistance, expected }) => {
      expect(Math.floor(calculateRabbitRestSeconds(raceDistance))).toBe(
        expected
      );
    }
  );
});

describe("測試輸入龜兔賽跑的比賽距離，輸出兔子在贏得比賽的前提下，可休息的秒數", () => {
  test.each([
    { raceDistance: 1000, expected: 3520 },
    { raceDistance: 28, expected: 98 },
    { raceDistance: 198, expected: 697 },
  ])(
    "測試輸入比賽距離 $raceDistance 公尺，輸出可偷懶 $expected 秒",
    ({ raceDistance, expected }) => {
      expect(complexCalculateRabbitRestSeconds(raceDistance)).toBe(expected);
    }
  );
});
