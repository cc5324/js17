export function calculateRabbitRestSeconds(distance) {
  const turtleSpeed = 0.28;
  const rabbitSpeed = 20;
  const rabbitBackward = 1 / 5;

  let restSeconds = Math.floor(
    distance / turtleSpeed - distance / (rabbitSpeed - rabbitBackward)
  );
  return restSeconds;
}
