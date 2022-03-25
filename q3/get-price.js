export function getPrice(age) {
  const originalPrice = 400;
  const primePrice = 200;

  if (age <= 6 || age >= 65) {
    return primePrice;
  } else {
    return originalPrice;
  }
}
