export function listFormulaAndCalculate(lastNumber) {
  let formula = "";
  let sum = 0;
  for (let number = 1; number <= lastNumber; number++) {
    if (number === 1) {
      formula += "1";
      sum += 1;
    } else if (number % 2 === 1) {
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
