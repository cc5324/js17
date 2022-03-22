import { compareReminder } from "./compare-reminder";

describe('compare reminders of two integer divided by the same divisor', () => {
  test('reminder of 7/3 and 4/3 are the same', () => {
    expect(compareReminder(7, 4, 3)).toBe('餘數相同')
  });

  test('reminder of 0/3 and 6/3 are the same', () => {
    expect(compareReminder(0, 6, 3)).toBe('餘數相同')
  });
  
  test('reminder of -6/3 and 6/3 are different', () => {
    expect(compareReminder(-6, 6, 3)).toBe('餘數相同')
  });
  
  test('reminder of 5/3 and 4/3 are different', () => {
    expect(compareReminder(5, 4, 3)).toBe('餘數不相同')
  });

  test('reminder of 5/2 and 4/2 are different', () => {
    expect(compareReminder(-5, 5, 3)).toBe('餘數不相同')
  });

  test('reminder of 5/2 and 4/2 are different', () => {
    expect(compareReminder(-5, 5, 0)).toBe('餘數不相同')
  });
});



