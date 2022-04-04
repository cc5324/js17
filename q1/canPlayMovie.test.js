import { canPlayMovie } from "./canPlayMovie";

describe("測試輸入客人人數，人數為 0 則回傳 false，不為 0 則回傳 true", () => {
  test("輸入客人人數為 0，不播放電影", () => {
    const guestNumber = 0;

    const playMovie = canPlayMovie(guestNumber);
    const expectPlayMovie = false;

    expect(playMovie).toBe(expectPlayMovie);
  });

  test("輸入客人人數為 1，會播放電影", () => {
    const guestNumber = 1;

    const playMovie = canPlayMovie(guestNumber);
    const expectPlayMovie = true;

    expect(playMovie).toBe(expectPlayMovie);
  });

  test("輸入客人人數為 100，會播放電影", () => {
    const guestNumber = 100;

    const playMovie = canPlayMovie(guestNumber);

    expect(playMovie).toBeTruthy();
  });
});
