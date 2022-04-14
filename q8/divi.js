export function divi(numInput, counts = 0) {
  const diviend = (numInput / 3).toFixed(2); //變成 string 了
  counts++;
  if (diviend.slice(-1) === "0") {
    // console.log(counts);
    // console.log(diviend);
    return counts;
  } else {
    // console.log(counts);
    // console.log(diviend);
    return divi(Number(diviend), counts);
  }
}
