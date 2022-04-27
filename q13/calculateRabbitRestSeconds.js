export function calculateRabbitRestSeconds(distance) {
  const turtleSpeed = 0.28;
  const rabbitSpeed = 20;
  const rabbitBackward = 1 / 5;

  let restSeconds = Math.floor(
    distance / turtleSpeed - distance / (rabbitSpeed - rabbitBackward)
  );
  return restSeconds;
}

export function complexCalculateRabbitRestSeconds(distance) {
  const turtleSpeed = 0.28;
  const rabbitSpeed = 20;
  const rabbitBackward = 1;

  let seconds = 0;
  let turtleRun = 0;
  let rabbitRun = 0;

  while (rabbitRun <= distance) {
    seconds++;
    rabbitRun += rabbitSpeed;
    turtleRun += turtleSpeed;

    if (seconds % 5 === 0) {
      rabbitRun -= rabbitBackward;
    }
  }

  return Math.floor((distance - turtleRun) / turtleSpeed);
}

// console.log(calculateRabbitRestSeconds(500));
// console.log(complexCalculateRabbitRestSeconds(500));
