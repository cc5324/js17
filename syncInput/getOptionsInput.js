import promptSync from "prompt-sync";

/**
 * @param {string[]} options input options
 */

//* case insensitive
//! 泛用 > 大小寫處理
function getOptionsInput(options) {
  const prompt = promptSync({ sigint: true });
  const question = `請輸入 ${options.join(" / ")}`;
  const userInput = prompt(`${question}: `).toLowerCase();
  try {
    if (!options.includes(userInput)) throw new Error("請輸入指定選項");
    return userInput;
  } catch (error) {
    console.log(error.message);
    return getOptionsInput(options);
  }
}

export { getOptionsInput };

/**
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {string[]} setting.options input options
 */

//* 動態產生 case insensitive 的正規表達式
// function getOptionsInput({ question, options } = {}) {
//   const prompt = promptSync({ sigint: true });
//   const userInput = prompt(`${question}: `);
//   const regOptions = options.map((option) => {
//     return new RegExp(`^${option}$`, "i");
//   });
//   try {
//     const isFit = regOptions.some((reg) => reg.test(userInput));
//     if (!isFit) throw new Error("請輸入指定選項");
//     return userInput.toLocaleLowerCase();
//   } catch (error) {
//     console.log(error.message);
//     return getOptionsInput({ question, options });
//   }
// }
