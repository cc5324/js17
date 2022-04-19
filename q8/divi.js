// const divi3 = divi({
//   divisor: 3,
//   decimalPlaces: 2,
//   decimalPlacesNumber: 0,
// });
// console.log(divi3(0.33));

export function divi({ divisor, decimalPlaces, decimalPlacesNumber }) {
  return function diviByDivisor(numberInput, times = 0) {
    if (numberInput === 0) return times;

    if (!Number.isInteger(numberInput)) {
      if (
        numberInput.toFixed(decimalPlaces).slice(-1) ===
        decimalPlacesNumber.toString()
      ) {
        return times;
      }
    }

    const diviend = (numberInput / divisor).toFixed(decimalPlaces); //變成 string 了
    times++;
    return diviByDivisor(Number(diviend), times);
  };
}

//* first version
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

//* second version
// export function divi({
//   divisor,
//   decimalPlaces,
//   decimalPlacesNumber,
//   numberInput,
//   times = 0,
// }) {
//   if (0 < numberInput) && (numberInput < 1){
//     if (numberInput.toString().slice(-1) === decimalPlacesNumber.toString()){
//       return times;
//     };
//   };
//   const diviend = (numberInput / divisor).toFixed(decimalPlaces); //變成 string 了
//   times++;

//   if (diviend.slice(-1) === decimalPlacesNumber.toString()) {
//     // console.log(counts);
//     // console.log(diviend);
//     return times;
//   } else {
//     // console.log(counts);
//     // console.log(diviend);
//     return divi({
//       divisor,
//       decimalPlaces,
//       decimalPlacesNumber,
//       numberInput: Number(diviend),
//       times,
//     });
//   }
// }
