import { checkInteger, checkNotNegative } from "../validation/validateInput.js";
import { getInputAndValidate } from "../validation/getInputAndValidate.js";
import { canPlayMovie } from "./canPlayMovie.js";

main();

function main() {
  const setting = {
    question: "請輸入客人人數",
    validators: [checkInteger, checkNotNegative],
  };

  const guestNumber = Number(getInputAndValidate(setting));

  if (canPlayMovie(guestNumber)) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
  } else {
    console.log("今日不播放電影");
  }
}
