export function listFormulaAndCalculate(lastNumber) {
  let formula = "";
  let sum = 0;

  for (let number = 1; number <= lastNumber; number++) {
    //! 舊版
    // if (number === 1) {
    //   formula += "1";
    //   sum += 1;
    // } else if (number % 2 === 1) {
    //   formula += `-${number}`;
    //   sum -= number;
    // } else {
    //   formula += `+${number}`;
    //   sum += number;
    // }

    //! 新版
    //? 更能看出條件判斷是：1以外，奇偶數對分
    if (number === 1) {
      formula += "1";
      sum += 1;
      continue;
    }

    if (number % 2 === 1) {
      formula += `-${number}`;
      sum -= number;
    } else {
      formula += `+${number}`;
      sum += number;
    }
  }
  return {
    formula,
    sum,
  };
}
