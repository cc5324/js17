export function getPrice(age) {
  const originalPrice = 400;
  const primePrice = originalPrice * 0.5;

  //? 當判斷範圍是一個區間
  //! 舊版
  // if (age <= 6 || age >= 65) {
  //   return primePrice;
  // } else {
  //   return originalPrice;
  // }

  //! 新版 > 更能看出是區間
  if (6 >= age || age >= 65) {
    return primePrice;
  } else {
    return originalPrice;
  }
}
