import { pickOddItems, pickOddCharacter } from "./pickOdd";

describe("測試輸入陣列，回傳奇數項目的陣列", () => {
  test.each([
    { array: [1, 2, 3], expected: [1, 3] },
    { array: [1], expected: [1] },
    { array: ["a", "b", "c", "d", "e"], expected: ["a", "c", "e"] },
    { array: [], expected: [] },
  ])("測試輸入$arr，輸出$expected)", ({ array, expected }) => {
    expect(pickOddItems(array)).toEqual(expected);
  });
});

describe("測試輸入字串，得到單數個字母的字串", () => {
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
