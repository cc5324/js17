import { pickOddCharacter } from "./pickOddCharacter";

describe("測試輸入字串，得到單數個字母", () => {
  test("輸入 'good'，輸入 'go'", () => {
    const input = "good";
    const expectOutput = "go";

    expect(pickOddCharacter(input)).toBe(expectOutput);
  });

  test("輸入 'night'，輸出 'ngt'", () => {
    const input = "night";
    const expectOutput = "ngt";

    expect(pickOddCharacter(input)).toBe(expectOutput);
  });

  test("輸入 '1  1  1'，輸出 '1  1'", () => {
    const input = "1  1  1";
    const expectOutput = "1  1";

    expect(pickOddCharacter(input)).toBe(expectOutput);
  });
});
