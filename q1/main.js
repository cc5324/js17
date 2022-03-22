// Common JS module 匯入方式
// const prompt = require('prompt-sync')({sigint: true});


// ES module 匯入方式
import promptSync from 'prompt-sync';
import {
    isDecimal,
    isNaturalNumber,
    isInteger,
    isNotNegative
} from '../checkInput/verify-input.js';

const prompt = promptSync({sigint: true});

function checkUserInput(){
    let userInput = prompt('請輸入客人人數：');
    try {
        isNaturalNumber(userInput);
        isDecimal(userInput);
        isNotNegative(userInput);
        isInteger(userInput);
        return Number(userInput);
    } catch (error) {
        console.log(error);
        return checkUserInput();
    }
}

function main(){
    let guestNumber = checkUserInput();
    if (guestNumber !== 0){
        console.log(`觀影人數: ${guestNumber}，照常播放電影`);
    } else {
    console.log('今日不播放電影');}
};

main();