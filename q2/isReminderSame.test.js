import { isReminderSame } from "./isReminderSame";

//0不能當除數，可以幫被除數
describe("輸入兩個整數被除數＆一個整數除數，測試兩者餘數是否相同", () => {
  describe("傳入除數為 3、被除數為 3，調整另一個被除數進行測試", () => {
    const divisor = 3;
    const numA = 3;

    test("被除數分別為3和3，餘數應相同", () => {
      const numB = 3;
      const compareResult = isReminderSame(numA, numB, divisor);
      expect(compareResult).toBeTruthy();
    });

    test("被除數分別為3和9，餘數應相同", () => {
      const numB = 0;
      const compareResult = isReminderSame(numA, numB, divisor);
      expect(compareResult).toBeTruthy();
    });

    test("被除數分別為3和0，餘數應相同", () => {
      const numB = 0;
      const compareResult = isReminderSame(numA, numB, divisor);
      expect(compareResult).toBeTruthy();
    });

    test("被除數分別為3和-3，餘數應相同", () => {
      const numB = -3;
      const compareResult = isReminderSame(numA, numB, divisor);
      expect(compareResult).toBeTruthy();
    });

    test("被除數分別為3和4，餘數應不相同", () => {
      const numB = 4;
      const compareResult = isReminderSame(numA, numB, divisor);
      expect(compareResult).toBeFalsy();
    });
  });
});
