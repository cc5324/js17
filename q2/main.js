import promptSync from 'prompt-sync';
import {
    isDecimal,
    isNaturalNumber,
    isInteger,
} from '../checkInput/verify-input.js';

import {
  compareReminder,
} from './compare-reminder.js';

const prompt = promptSync({sigint: true});

function getNumber1(){
  let number1 = prompt('請輸入第一個數字：');
  try {
        isNaturalNumber(number1);
        isDecimal(number1);
        isInteger(number1);
        return Number(number1);
    } catch (error) {
        console.log(error);
        return getNumber1();
    }
}

function getNumber2(){
  let number2 = prompt('請輸入第二個數字：');
  try {
        isNaturalNumber(number2);
        isDecimal(number2);
        isInteger(number2);
        return Number(number2);
    } catch (error) {
        console.log(error);
        return getNumber2();
    }
}

function main(){
  console.log('請分別輸入數字')
  let number1 = getNumber1();
  let number2 = getNumber2();
  console.log(compareReminder(number1, number2, 3))
};

main();


// const prompt = promptSync();
// function isSame(numA, numB){
//   return (numA===numB ? '相同' : '不相同')
// }

// function main(){

//   let number1 =  prompt('請輸入第一個數字：');

//   let number2 =  prompt('請輸入第二個數字：');

//   let remainder1 = (number1%3);
//   let remainder2 = (number2%3);
//   console.log('餘數'+isSame(remainder1, remainder2));
// };

// main();
