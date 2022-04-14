export function calculateRabbitRestSeconds({
  distance,
  turtleSpeed = 0.28,
  rabbitSpeed = 20,
  rabbitBackward = 1 / 5,
}) {
  let restSeconds = Math.floor(
    distance / turtleSpeed - distance / (rabbitSpeed - rabbitBackward)
  );
  return restSeconds;
}
