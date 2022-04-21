import { isPrime } from "./isPrime";
describe("測試輸入數值， 輸入是否為質數", () => {
  describe("測試輸入質數，回傳 true", () => {
    test.each([[2], [5], [37], [97]])("測試輸入 %d，是質數", (numberInput) => {
      expect(isPrime(numberInput)).toBeTruthy();
    });
  });

  describe("測試輸入非質數整數，回傳 false", () => {
    test.each([[0], [1], [9], [2013], [-9], [-2013]])(
      "測試輸入 %i，不是質數",
      (numberInput) => {
        expect(isPrime(numberInput)).toBeFalsy();
      }
    );
  });

  describe("測試輸入小數，回傳 false", () => {
    test.each([[0.2], [-0.2], [0.03], [-0.03]])(
      "測試輸入 %d，不是質數",
      (numberInput) => {
        expect(isPrime(numberInput)).toBeFalsy();
      }
    );
  });
});
