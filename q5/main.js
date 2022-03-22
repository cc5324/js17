//n最小為4，只輸入偶數
import promptSync from 'prompt-sync';
import {
    isDecimal,
    isNaturalNumber,
    isInteger,
    isOverNum,
} from '../checkInput/verifyInput.js';

const prompt = promptSync({sigint: true})

function isOdd(num){
  if (num%2 ===1) throw '請輸入偶數';
}

function checkUserInput(){
  let userInput = prompt('請輸入一個大於四的偶數：');
  try {
    isNaturalNumber(userInput);
    isDecimal(userInput);
    isInteger(userInput);
    isOverNum(userInput, 4);
    isOdd(userInput);
    return Number(userInput);
} catch (error) {
    console.log(error);
    return checkUserInput();
}

}

function umleven(n){
  if ((n-2) === 2) {
    return 8;
  } else {
    return ((n-2)*n) + umleven(n-2)
  }
}

function main(){
  let number = checkUserInput();
  console.log(`結果為：${umleven(number)}`)
}

main();

// let inputCheck = false;

// while (!inputCheck){
//   let number = prompt('請輸入一個大於四的偶數：');
//   if (isEven(number) && (number>=4)){
//     inputCheck = true;
//     console.log(umleven(number));
// } else {
//     console.log('提醒：數字須為大於四的偶數')
// }}
