function checkNotEmpty(input) {
  if (input.trim() === "") throw "請勿輸入空白";
}

function checkAlphabet(input) {
  checkNotEmpty(input);
}

function checkDecimalNumber(input) {
  checkNotEmpty(input);
  if (isNaN(input) === true) throw "請勿輸入文字";
  if (input.includes("Infinity")) throw "請勿輸入無限數值";

  if (input.startsWith("0b")) throw "請將二進位制數字，改以十進位制格式輸入";
  if (input.startsWith("0o")) throw "請將八進位制數字，改以十進位制格式輸入";
  if (input.startsWith("0x")) throw "請將十六進位制數字，改以十進位制格式輸入";

  if (/e/i.test(input)) throw "請勿使用科學記號表示法";

  if (input.length > 1 && input.startsWith("0") && !input.startsWith("0."))
    throw "數字開頭不得為 0，請去掉 0 後重新輸入";
}

// 以下為確認數字類別

function checkInteger(input) {
  checkDecimalNumber(input);
  if (input % 1 !== 0) throw "請輸入整數";
}

// function isNumber(input) {
//   const numReg = /[^0-9]+/;
//   if (numReg.test(input) === true) throw "請輸入數字";
// }

function checkPositive(input) {
  checkDecimalNumber(input);
  if (Number(input) < 0) throw "請勿輸入負數";
  if (Number(input) === 0) throw "請勿輸入 0";
}

function checkNotNegative(input) {
  checkDecimalNumber(input);
  if (Number(input) < 0) throw "請勿輸入負數";
}

function checkEven(input) {
  checkInteger;
  if (Number(input) % 2 !== 0) throw "請輸入偶數";
}

function checkOverNum(input, min) {
  checkDecimalNumber(input);
  if (Number(input) < min) throw `請輸入大於 ${min} 的數字`;
}

function checkOverFour(input) {
  checkDecimalNumber(input);
  if (Number(input) < 4) throw `請輸入大於 4(含)的偶數`;
}

export {
  checkInteger,
  checkNotEmpty,
  checkDecimalNumber,
  checkPositive,
  checkNotNegative,
  checkEven,
  checkOverNum,
  checkOverFour,
};
