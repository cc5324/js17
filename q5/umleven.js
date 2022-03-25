export function umleven(n){
  if ((n-2) === 2) {
    return 8;
  } else {
    return ((n-2)*n) + umleven(n-2)
  }
}