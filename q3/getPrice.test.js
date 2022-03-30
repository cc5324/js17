import { getPrice } from "./getPrice.js";

//未滿一歲會請使用者輸入1
describe("測試輸入年齡，得到好想樂園門票價錢", () => {
  describe("6 歲(含)以下的孩童，票價為優惠票 $200", () => {
    test("輸入 6 歲，得到票價為 200", () => {
      const userAge = 6;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(200);
    });

    test("輸入 1 歲，得到票價為 200", () => {
      const userAge = 1;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(200);
    });
  });

  describe("65 歲(含)以上的老人，票價為優惠票 $200", () => {
    test("輸入 65 歲，得到票價為 200", () => {
      const userAge = 65;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(200);
    });

    test("輸入 80 歲，得到票價為 200", () => {
      const userAge = 80;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(200);
    });
  });

  describe("7 歲到 64 歲，票價為原價 $400", () => {
    test("輸入 7 歲，得到票價為 400", () => {
      const userAge = 7;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(400);
    });

    test("輸入 64 歲，得到票價為 400", () => {
      const userAge = 64;
      const userPrice = getPrice(userAge);

      expect(userPrice).toBe(400);
    });
  });
});
