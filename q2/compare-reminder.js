export function compareReminder(numA, numB, divisor){
  if ((numA % divisor) === (numB % divisor)) {
    return('餘數相同')
  } else {
    return('餘數不相同')
  };
}