import promptSync from 'prompt-sync';
import {
    isDecimal,
    isNaturalNumber,
    isInteger,
    isPositive
} from '../checkInput/verifyInput.js';

const prompt = promptSync({sigint: true})

function checkUserInput(){
    let userInput = prompt('請輸入一個正整數：');
    try {
        isNaturalNumber(userInput);
        isDecimal(userInput);
        isPositive(userInput);
        isInteger(userInput);
        return Number(userInput);
    } catch (error) {
        console.log(error);
        return checkUserInput();
    }
}

function addResult(number){
  let total = 0;
  if (number == 1){
    total = 1
  } else if (number%2 == 0){
    total = (number/2) +2
  } else {
    total = -(Math.floor(number/2) - 1)
  }
  return total
}

function listFormula(number){
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

function main(){
  let number = checkUserInput();
  console.log(`${listFormula(number)} = ${addResult(number)}`);
}

main();

// function add(number){
//   let total = 0;
//   for(let i = 1; i <= number; i++){
//     if (i ==1) {
//       total += 1
//     } else if (i%2 == 1){
//       total -= i 
//     } else {
//       total += i
//     }
//   }
//   return total;
// }