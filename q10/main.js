import { isPrimeNum } from "./isPrimeNum.js";

function main() {
  const array = [3, 50, 0, 13, 2, 4, 11];

  //* 用 for...of...迭代
  // let primeArray = [];

  // for (let item of array) {
  //   if (isPrimeNum(item)) {
  //     primeArray.push(item);
  //   }
  // }

  //* 用 array.filter 迭代
  let primeArray = array.filter((item) => isPrimeNum(item));

  console.log(primeArray);
}

main();
