export default function divi(numInput, counts = 0) {
  const diviend = numInput / 3;
  counts++;
  if (isFloatHundredthZero(diviend)) {
    console.log(counts);
    console.log(diviend);
    return counts;
  } else {
    console.log(counts);
    console.log(diviend);
    return divi(diviend, counts);
  }
}

function isFloatHundredthZero(numInput) {
  const strInput = String(numInput);
  if (getPointIndex(numInput) === -1) {
    return false;
  }
  const floatHundredIndex = getPointIndex(numInput) + 2;
  return strInput[floatHundredIndex] === "0";
}

function getPointIndex(numInput) {
  const pointIndex = String(numInput).indexOf(".");
  return Number(pointIndex);
}

export { isFloatHundredthZero, getPointIndex };
