function isInteger(input) {
  isNotEmpty(input);
  isDecimalNumber(input);
  if (input % 1 !== 0) throw "請輸入整數";
}

function isNotEmpty(input) {
  if (input.trim() === "") {
    throw "請勿輸入空白";
  }
}

function isDecimalNumber(input) {
  if (isNaN(input) === true) throw "請勿輸入文字";
  if (input.includes("Infinity")) throw "請勿輸入無限數值";

  if (input.startsWith("0b")) throw "請將二進位制數字，改以十進位制格式輸入";
  if (input.startsWith("0o")) throw "請將八進位制數字，改以十進位制格式輸入";
  if (input.startsWith("0x")) throw "請將十六進位制數字，改以十進位制格式輸入";

  if (input.includes("e")) throw "請勿使用科學記號表示法";
  if (input.includes("E")) throw "請勿使用科學記號表示法";

  if (input.length > 1 && input.startsWith("0"))
    throw "首位數字不得為 0，請去掉 0 後重新輸入";
}

// function isNumber(input) {
//   const numReg = /[^0-9]+/;
//   if (numReg.test(input) === true) throw "請輸入數字";
// }

function isPositive(numInput) {
  if (Number(numInput) < 0) throw "請勿輸入負數";
  if (Number(numInput) === 0) throw "請勿輸入 0";
}

function isNotNegative(numInput) {
  if (Number(numInput) < 0) throw "請勿輸入負數";
}

function isOverNum(numInput, min) {
  if (Number(numInput) < min) throw `請輸入大於 ${min} 的數字`;
}

function isEven(numInput) {
  if (Number(numInput) % 2 !== 0) throw "請輸入偶數";
}

export {
  isInteger,
  isNotEmpty,
  isDecimalNumber,
  isPositive,
  isNotNegative,
  isOverNum,
  isEven,
};
