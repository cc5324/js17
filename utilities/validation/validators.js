function checkNotEmpty(input) {
  if (input.trim() === "") throw new Error("請勿輸入空白");
}

function checkAlphabet(input) {
  checkNotEmpty(input);
  if (/[^a-zA-Z]/.test(input)) throw new Error("請勿輸入英文字母以外的字符");
}

function checkAlphabetSentences(input) {
  if (/[^a-zA-Z\s]/.test(input)) throw new Error("請勿輸入英文字母以外的字符");
}

// ! 放的位置
function checkSafeInteger(input) {
  if (Number.isSafeInteger(+input))
    throw new Error("數字超過可精確表示範圍，請輸入更小的數字");
}

function checkDecimalNumber(input) {
  checkNotEmpty(input);
  if (Number.isNaN(Number(input)) === true) throw new Error("請勿輸入文字");
  if (Number(input) === Infinity) throw new Error("請勿輸入無限數值");
  // if (input.includes("Infinity")) throw new Error("請勿輸入無限數值");

  if (input.startsWith("0b"))
    throw new Error("請將二進位制數字，改以十進位制格式輸入");
  if (input.startsWith("0o"))
    throw new Error("請將八進位制數字，改以十進位制格式輸入");
  if (input.startsWith("0x"))
    throw new Error("請將十六進位制數字，改以十進位制格式輸入");

  if (/e/i.test(input)) throw new Error("請勿使用科學記號表示法");

  if (input.length > 1 && input.startsWith("0") && !input.startsWith("0."))
    throw new Error("數字開頭不得為 0，請去掉 0 後重新輸入");
}

// 以下為確認數字類別

function checkInteger(input) {
  checkDecimalNumber(input);
  if (!Number.isInteger(Number(input))) throw new Error("請輸入整數");
}

// function isNumber(input) {
//   const numReg = /[^0-9]+/;
//   if (numReg.test(input) === true) throw "請輸入數字";
// }

function checkPositive(input) {
  checkDecimalNumber(input);
  if (Number(input) < 0) throw new Error("請勿輸入負數");
  if (Number(input) === 0) throw new Error("請勿輸入 0");
}

function checkNotNegative(input) {
  checkDecimalNumber(input);
  if (Number(input) < 0) throw new Error("請勿輸入負數");
}

function checkEven(input) {
  checkInteger;
  if (Number(input) % 2 !== 0) throw new Error("請輸入偶數");
}

function checkOverNum(num) {
  return function (input) {
    checkDecimalNumber(input);
    if (Number(input) < num) throw new Error(`請輸入大於 ${num} (含)的偶數`);
  };
}

// function checkOverFour(input) {
//   checkDecimalNumber(input);
//   if (Number(input) < 4) throw `請輸入大於 4(含)的偶數`;
// }

export {
  checkInteger,
  checkNotEmpty,
  checkSafeInteger,
  checkDecimalNumber,
  checkPositive,
  checkNotNegative,
  checkEven,
  checkOverNum,
  checkAlphabet,
  checkAlphabetSentences,
};
