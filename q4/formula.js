export function listFormulaAndCalculate(lastNumber) {
  let formula = "";

  for (let index = 0; index < lastNumber; index++) {
    let number = index + 1;
    //! 新版
    //? 更能看出條件判斷是：1以外，奇偶數對分
    if (number === 1) {
      formula += "1";
      continue;
    }

    if (number % 2 === 1) {
      formula += `-${number}`;
    } else {
      formula += `+${number}`;
    }
    //! 舊版
    // if (number === 1) {
    //   formula += "1";
    // } else if (number % 2 === 1) {
    //   formula += `-${number}`;
    // } else {
    //   formula += `+${number}`;
    // }
  }
  return formula;
}
