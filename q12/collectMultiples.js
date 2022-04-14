export function collectMultiples({ number, topLimit }) {
  let multiples = [];
  let index = 1;
  while (number * index <= topLimit) {
    multiples.push(number * index);
    index++;
  }
  return multiples;
}
