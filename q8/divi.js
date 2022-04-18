export function divi(numInput, times = 0) {
  const diviend = (numInput / 3).toFixed(2); //變成 string 了
  times++;
  if (diviend.slice(-1) === "0") {
    // console.log(counts);
    // console.log(diviend);
    return times;
  } else {
    // console.log(counts);
    // console.log(diviend);
    return divi(Number(diviend), times);
  }
}
