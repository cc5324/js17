export function divi(numInput) {
  const diviend = numInput / 3;
  let count = 1;
  if (isFloatHundredthZero(diviend)) {
    return count;
  } else {
    count += 1;
    return divi(diviend / 3);
  }
}

function isFloatHundredthZero(numInput) {
  const strInput = String(numInput);
  const floatHundredIndex = getPointIndex(numInput) + 2;
  return strInput[floatHundredIndex] === "0";
}

function getPointIndex(numInput) {
  const pointIndex = String(numInput).indexOf(".");
  return Number(pointIndex);
}

console.log(divi(3));
