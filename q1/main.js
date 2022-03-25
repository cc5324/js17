import { checkInput } from "./get-input.js";

main();

function main() {
  let guestNumber = checkInput();
  if (guestNumber !== 0) {
    console.log(`觀影人數: ${guestNumber}，照常播放電影`);
  } else {
    console.log("今日不播放電影");
  }
}
