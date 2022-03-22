//未輸入空白

function isNaturalNumber(input){
  if (input.trim() === ''){
    throw '請勿輸入空白'
  }
  if (isNaN(input) === true) {
    throw '請勿輸入文字'
  }
}

function isDecimal(numInput){
  if (numInput.startsWith('0b')) throw '請將二進位制數字，改以十進位制格式輸入';
  if (numInput.startsWith('0o')) throw '請將八進位制數字，改以十進位制格式輸入';
  if (numInput.startsWith('0x')) throw '請將十六進位制數字，改以十進位制格式輸入';

  if (numInput.includes('e')) throw '請勿使用科學記號表示法';
  if (numInput.includes('E')) throw '請勿使用科學記號表示法';
}

function isInteger(numInput){
  // if (numInput%1 !== 0) throw '請輸入整數';
  if (Number.isInteger(+numInput) === false) throw '請輸入整數';
};

function isPositive(numInput){
  if (numInput < 0) throw '請勿輸入負數';
  if (numInput == 0) throw '請勿輸入 0 '
};

function isNotNegative(numInput){
  if (numInput < 0) throw '請勿輸入負數';
};

// function isInRange(numInput, min, max){
//   if (numInput < min) throw `請輸入大於 ${min} 的數字`;
//   if (numInput > max) throw `請輸入小於 ${max} 的數字`;
// }

function isOverNum(numInput, min){
  if (numInput < min) throw `請輸入大於 ${min} 的數字`;
}

export {
  isDecimal,
  isNaturalNumber,
  isInteger,
  isPositive,
  isNotNegative,
  // isInRange,
  isOverNum
};