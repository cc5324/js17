import {
  isDecimal,
  isNaturalNumber,
  isInteger,
  isPositive,
  isNotNegative,
  // isInRange,
  isOverNum,
} from './verify-input';

//測試十進位
describe('test input should be decimal', () => {
  test('0bff is not decimal', () => {
    expect(() => isDecimal('0bff')).toThrow()
  });
});

//測試自然數

describe('input should be natural number', () => {
  test('1 is a natural number', () => {
    expect(isNaturalNumber('100')).toBeFalsy()
  });
});

//測試整數

//測試正數（不包括0）

//測試非負數(包括正數＆0)

//測試範圍內數字

//測試一定數字以上