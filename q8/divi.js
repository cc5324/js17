//* new version
// console.log(divi(0));
/**
 *計算 numberInput 除以 divisor 幾次之後，小數後第 decimalPlaces 會等於 0
 * @param {object} param
 * @param {number} param.divisor
 * @param {number} param.decimalPlaces
 * @param {number} param.numberInput
 * @returns {number} times
 * @throws 當輸入參數不為 number 型態會報錯
 */

export function divi({ divisor, decimalPlaces, numberInput, times = 0 }) {
  if (numberInput === 0) return times;

  if (!Number.isInteger(numberInput)) {
    if (numberInput.toFixed(decimalPlaces) === (0).toFixed(decimalPlaces)) {
      return times;
    }
  }

  const diviend = (numberInput / divisor).toFixed(decimalPlaces); //變成 string 了
  times++;

  return divi({
    divisor,
    decimalPlaces,
    numberInput: Number(diviend),
    times,
  });
}

//* old version
// function divi(numberInput, times = 0) {
//   const diviend = (numberInput / 3).toFixed(2); //變成 string 了
//   times++;
//   if (diviend.slice(-1) === "0") {
//     // console.log(counts);
//     // console.log(diviend);
//     return times;
//   } else {
//     // console.log(counts);
//     // console.log(diviend);
//     return divi(Number(diviend), times);
//   }
// }
