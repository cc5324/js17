import { loadEquipments } from "./loadEquipments";
import { getRandomInteger } from "./getRandomInteger";

jest.mock("./getRandomInteger");

beforeEach(() => {
  return getRandomInteger
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1)
    .mockReturnValue(2);
});

describe("測試 loadEquipments，其中 getRandomInteger 為 mock function，會回傳一次 0、一次 1、其餘皆回傳 2", () => {
  const equipments = [
    {
      name: "dumbbell",
      weight: 30,
    },
    {
      name: "bar",
      weight: 20,
    },
    {
      name: "treadmill",
      weight: 50,
    },
  ];

  test("限重 100 公斤", () => {
    const { totalWeight, sport } = loadEquipments({
      maxWeight: 100,
      equipments,
    });
    // expect(getRandomInteger).toHaveBeenCalled();
    expect(totalWeight).toBe(100);
    expect(sport).toEqual([1, 1, 1]);
  });

  test("限重 200 公斤", () => {
    const { totalWeight, sport } = loadEquipments({
      maxWeight: 200,
      equipments,
    });
    // expect(getRandomInteger).toHaveBeenCalled();
    expect(totalWeight).toBe(200);
    expect(sport).toEqual([1, 1, 3]);
  });

  test("限重 160 公斤", () => {
    const { totalWeight, sport } = loadEquipments({
      maxWeight: 160,
      equipments,
    });
    // expect(getRandomInteger).toHaveBeenCalled();
    expect(totalWeight).toBe(150);
    expect(sport).toEqual([1, 1, 2]);
  });
});
