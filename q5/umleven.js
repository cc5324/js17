export function umleven(n) {
  if (n === 4) {
    return (n - 2) * n;
  } else {
    return (n - 2) * n + umleven(n - 2);
  }
}
