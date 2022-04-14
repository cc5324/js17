import { range } from "../utilities/range.js";
import { isPrimeNum } from "../q10/isPrimeNum.js";
import { collectMultiples } from "./collectMultiples.js";

main();

function main() {
  let primesMultiplesArrays = range(10, 20)
    .filter((number) => isPrimeNum(number))
    .map((prime) => collectMultiples({ number: prime, topLimit: 100 }));

  primesMultiplesArrays.forEach((primesMultiplesArray) => {
    console.log(`質數 ${primesMultiplesArray[0]} 在 1 ~ 100 間的倍數有:
${primesMultiplesArray.join(", ")}`);
  });
}
