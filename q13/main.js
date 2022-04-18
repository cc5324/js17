`13. 龜兔賽跑，兔子每秒可以跑 20 公尺，烏龜每秒跑 0.28 公尺，
他們參加 1000 公尺競賽：
兔子故意用每跑 5 秒鐘後退 1 公尺的方式來挑釁烏龜，
請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?`;

//TODO: module jest test
import { calculateRabbitRestSeconds } from "./calculateRabbitRestSeconds.js";

main();

function main() {
  const raceDistance = 1000;

  const rabbitRestSeconds = calculateRabbitRestSeconds(raceDistance);

  console.log(`兔子可以偷懶 ${rabbitRestSeconds} 秒`);
}
