import promptSync from 'prompt-sync';
import {
    isDecimal,
    isNaturalNumber,
    isInteger,
    isPositive,
    // isOverNum,
} from '../checkInput/verifyInput.js';

const prompt = promptSync({sigint: true});

function getUserAge(){
    let userInput = prompt('請輸入年齡：');
    try {
        isNaturalNumber(userInput);
        isDecimal(userInput);
        isInteger(userInput);
        isPositive(userInput);
        // isOverNum(userInput, 1)
        return Number(userInput);
    } catch (error) {
        console.log(error);
        return getUserAge();
    }
}

function getPrice(age){
    const originalPrice = 400;
    const primePrice = 200;

    if (age <= 6 || age >= 65){
        return primePrice;
    } else {
        return originalPrice;
    }
}

function main(){
    let userAge = getUserAge()
    console.log('票價為 '+(getPrice(userAge))+' 元')
};

main();