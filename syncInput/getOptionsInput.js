import promptSync from "prompt-sync";

/**
 * @param {object} setting
 * @param {string} setting.question question to prompt
 * @param {string[]} setting.options input options
 */

//* case insensitive 的選項驗證
//動態產生 case insensitive 的正規表達式

function getOptionsInput({ question, options } = {}) {
  const prompt = promptSync({ sigint: true });
  const userInput = prompt(`${question}: `);
  const regOptions = options.map((option) => {
    return new RegExp(`^${option}$`, "i");
  });
  try {
    const isFit = regOptions.some((reg) => reg.test(userInput));
    if (!isFit) throw new Error("請輸入指定選項");
    return userInput;
  } catch (error) {
    console.log(error.message);
    return getOptionsInput({ question, options });
  }
}

//* case sensitive (須完全相等)的選項驗證
function getOptionsCaseSensitiveInput({ question, options } = {}) {
  const prompt = promptSync({ sigint: true });
  const userInput = prompt(`${question}: `);
  try {
    if (!options.includes(userInput)) throw new Error("請輸入指定選項");
    return userInput;
  } catch (error) {
    console.log(error.message);
    return getOptionsInput({ question, options });
  }
}

export { getOptionsInput, getOptionsCaseSensitiveInput };
