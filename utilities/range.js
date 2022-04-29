/**
 * 輸入兩個數字，回傳數字區間的陣列，間隔預設值為 1
 * @param {number} start integer starting from which the sequence of integers is to be returned.
 * @param {number} end integer before which the sequence of integers is to be returned.
 * @param {number} step integer value which determines the increment between each integer in the sequence.
 * @returns array with sequence of integers
 * @throws {RangeError:Invalid array length} when start and end dose not fit with step argument
 *
 */

export function range(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  let numberArray = Array(length)
    .fill(start)
    .map((value, index) => value + index * step);
  return numberArray;
}
