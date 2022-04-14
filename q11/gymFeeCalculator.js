//! do while v.s while
function gymFeeCalculator(periods) {
  const basicMonthFee = 500;
  // console.log(`basicMonthFee`, basicMonthFee);
  const firstPeriodDiscount = 0.79;

  let total = 0;
  // let discount = 0;
  let period = 1;
  do {
    if (period === 1) {
      total += basicMonthFee * firstPeriodDiscount;
    } else {
      total += basicMonthFee;
    }

    if (period % 5 === 0) {
      total -= 200;
    }

    // total -= rewards(period);

    period++;
  } while (period <= periods);

  return total;
}

function rewards(periods) {
  // console.log(`in reward func`);
  const rewards = 200;
  const fullPeriods = 5;
  return periods % fullPeriods === 0 ? rewards : 0;
}

export { gymFeeCalculator, rewards };

// function gymFeeCalculator(periods) {
//   const basicMonthFee = 500;
//   // console.log(`basicMonthFee`, basicMonthFee);

//   const basePrice = calculateBaseFee(periods);
//   // console.log(`basePrice`, basePrice);
//   const discount = calculateDiscount(periods);
//   // console.log(`discount`, discount);
//   const total = basePrice - discount;
//   // console.log(`total`, total);

//   return total;

//   function calculateBaseFee(periods) {
//     let total = 0;
//     let index = 0;

//     // total = basicMonthFee * periods;

//     do {
//       total += basicMonthFee;
//       index += 1;
//     } while (index < periods);

//     return total;
//   }

//   function calculateDiscount(periods) {
//     return firstPeriodDiscount(periods) + rewards(periods);

//     function firstPeriodDiscount(periods) {
//       const percent = 0.79;
//       const discount = Number(periods) ? basicMonthFee * (1 - percent) : 0;
//       return discount;
//     }

//     function rewards(periods) {
//       let discount = 0;
//       const rewards = 200;
//       const fullPeriods = 5;

//       discount = Math.floor(periods / fullPeriods) * rewards;
//       return discount;
//     }
//   }
// }
