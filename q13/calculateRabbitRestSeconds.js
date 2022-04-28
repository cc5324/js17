export function calculateRabbitRestSeconds(distance) {
  const turtleSpeed = 0.28;
  const rabbitSpeed = 20;
  const rabbitBackward = 1 / 5;

  const rabbitRestSeconds =
    distance / turtleSpeed - distance / (rabbitSpeed - rabbitBackward);

  console.log(`rabbitRestSeconds`, rabbitRestSeconds);
  return Math.floor(rabbitRestSeconds);
  // return rabbitRestSeconds;
}

export function complexCalculateRabbitRestSeconds(distance) {
  const rabbit = {
    speed: 20,
    run: 0,
    //* backward as function，進 function 判斷
    backward: (seconds) => {
      return seconds % 5 === 0 ? -1 : 0;
    },
    //! backward as number，在主程式中判斷
    // backward: -1,
  };

  const turtle = {
    speed: 0.28,
    run: 0,
  };

  let seconds = 0;

  while (rabbit.run < distance) {
    seconds++;
    rabbit.run += rabbit.speed;
    turtle.run += turtle.speed;

    //! backward as number，在主程式中判斷
    // if (seconds % 5 === 0) {
    //   rabbit.run += rabbit.backward;
    // }

    //* backward as function，進 function 判斷
    rabbit.run += rabbit.backward(seconds);
    // console.log(`rabbit`, rabbit);
    // console.log(`turtle`, turtle);
  }

  const rabbitRestSeconds = (distance - turtle.run) / turtle.speed;
  // console.log(`rabbitRestSeconds`, rabbitRestSeconds);

  return Math.floor(rabbitRestSeconds);
  // return rabbitRestSeconds;
}

// console.log(calculateRabbitRestSeconds(198));
console.log(complexCalculateRabbitRestSeconds(198));
