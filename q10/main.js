import { isPrimeNum } from "./isPrimeNum.js";

function main() {
  const array = [3, 50, 0, 13, 2, 4, 11];
  console.log(`陣列：[${array}]`);

  //* 用array.foreach 迭代
  array.forEach((item, index) => {
    if (isPrimeNum(item)) {
      console.log(`質數 ${item} 的索引值為 ${index}`);
    }
  });

  //* 用 array.filter 迭代：可以選出質數，但沒辦法保留元陣列索引值（除非另外存起來）

  // let primeArray = array.filter((item) => isPrimeNum(item));
  // console.log(primeArray);

  //* 用 for...of...迭代: 不適合，當 value 有重複，沒辦法找到索引值
  // let primeArray = [];

  // for (let item of array) {
  //   if (isPrimeNum(item)) {
  //    primeArray.push(item);
  //   }
  // }

  //* 用 iterator 迭代
  // const iterator = array.entries();
  // for (let [key, value] of iterator) {
  //   if (isPrimeNum(value)) {
  //     console.log(`質數 ${value} 的索引值為 ${key}`);
  //   } else {
  //     continue;
  //   }
  // }
}

main();
