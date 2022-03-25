export function mainFormula(number){
  let formula = '';
    for(let i = 1; i <= number; i++){
    if (i ==1) {
      formula += '1'
    } else if (i%2 == 1){
      formula += `-${i}`;
    } else {
      formula += `+${i}`;
    }
  }
  return formula;
}