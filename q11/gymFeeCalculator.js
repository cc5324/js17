function gymFeeCalculator(periods) {
  const basicMonthFee = 500;
  const discount = {
    firstPeriod: 0.79,
    fivePeriods: 200,
  };

  let total = 0;
  let period = 1;
  do {
    if (period === 1) {
      total += basicMonthFee * discount.firstPeriod;
    } else {
      total += basicMonthFee;
    }

    if (period % 5 === 0) {
      total -= discount.fivePeriods;
    }

    period++;
  } while (period <= periods);

  return total;
}

export { gymFeeCalculator };
