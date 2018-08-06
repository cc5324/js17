const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('龜兔賽跑，兔子每秒可以跑6公尺，烏龜每秒跑0.5公尺，他們參加100公尺競賽，兔子很囂張為了挑釁烏龜，每跑5秒鐘又故意後退1公尺，兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?', () => {

  const rabbit = 6;
  const turtle = 0.5;

  const rabbit2 = Math.floor(100 / (5*rabbit));

  const ans = (100 / turtle) - (100 + rabbit2) / rabbit;

  console.log(ans);
rl.close();
});