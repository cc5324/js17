import { checkInteger, checkNotNegative } from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { willPlayMovie } from "./willPlayMovie.js";

main();

function main() {
  // const question = "請輸入客人人數：";
  // const validators = [checkInteger, checkNotNegative];
  // const guestNumber = getInput(question);
  const setting = {
    question: "請輸入客人人數",
    validators: [checkInteger, checkNotNegative],
  };

  const guestNumber = getInputAndValidate(setting);

  if (willPlayMovie(guestNumber)) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
  } else {
    console.log("今日不播放電影");
  }
}
