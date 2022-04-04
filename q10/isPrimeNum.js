//* 排除 負數, 0, 1
//* 剩餘的數字全部迭代跑一遍
// export function isPrimeNum(numInput) {
//   if (numInput <= 1) return false;

//   for (let index = 2; index < numInput; index++) {
//     if (numInput % index === 0) {
//       return false;
//     } else {
//       continue;
//     }
//   }
//   return true;
// }

//* 排除 負數, 0, 1
//* 先排除偶數
//* 剩餘的奇數全部迭代跑一遍
// export function isPrimeNum(numInput) {
//   if (numInput <= 1) return false;

//   if (numInput === 2) return true;

//   if (numInput % 2 === 0) return false;

//   for (let index = 3; index < numInput; index += 2) {
//     if (numInput % index === 0) {
//       return false;
//     } else {
//       continue;
//     }
//   }
//   return true;
// }

//* 排除 負數, 0, 1
//* 1 ~ (numInput 開根號) 間的數迭代跑一遍
export function isPrimeNum(numInput) {
  const maxDivisor = Math.floor(Math.sqrt(numInput));

  if (numInput <= 1) return false;

  // if (numInput === 2) return true;
  // if (numInput % 2 === 0) return false;

  for (let index = 2; index <= maxDivisor; index++) {
    if (numInput % index === 0) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}
