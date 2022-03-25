import { umleven } from "./umleven";

describe('test result of 2*4 + 4*6 + 6*8...+(n-2)*n', () => {
  test(('2*4 + 4*6 + 6*8 = 80'), () => {
    expect(umleven(8)).toBe(80);
  });

  test(('2*4 + 4*6 + 6*8 ...+ 10*12 = 280'), () => {
    expect(umleven(12)).toBe(280);
  });
});