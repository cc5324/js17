import { checkInteger, checkNotNegative } from "../validation/validators.js";
import { getFormattedInput } from "../syncInput/getFormattedInput.js";
import { canPlayMovie } from "./canPlayMovie.js";
import { getNaturalNumberInput } from "../syncInput/getNumberInput.js";

main();

function main() {
  // const setting = {
  //   question: "請輸入客人人數",
  //   validators: [checkInteger, checkNotNegative],
  //   returnType: Number,
  // };

  // const guestNumber = getFormattedInput(setting);

  const guestNumber = getNaturalNumberInput("請輸入客人人數");
  console.log(typeof guestNumber);

  if (canPlayMovie(guestNumber)) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
  } else {
    console.log("今日不播放電影");
  }
}
