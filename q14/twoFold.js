//* 未滿 20 分鐘就還沒長成
function twoFold(bacteria, minute) {
  if (minute < 20) {
    return bacteria;
  }

  if (minute === 20) {
    return bacteria * 2;
  }

  if (minute > 20) {
    bacteria = bacteria * 2;
    return twoFold(bacteria, minute - 20);
  }
}

// function twoFold(bacteria, minute) {
//   if (minute === 20) {
//     return bacteria * 2;
//   } else if (minute < 20) {
//     return bacteria;
//   } else {
//     bacteria = bacteria * 2;
//     return twoFold(bacteria, minute - 20);
//   }
// }

//* 未滿 20 分鐘用生長速率計算（？？
// function twoFold(bacteria, minute) {
//   const growRate = 1 / 10;
//   if (minute < 20) {
//     console.log(
//       `最後經過 ${minute} 分鐘 ${bacteria} += `,
//       Math.floor(bacteria * growRate)
//     );
//     bacteria += Math.floor(bacteria * growRate);
//     return bacteria;
//   }

//   if (minute === 20) {
//     console.log(`${bacteria} 經過最後 20 分鐘變成 ${bacteria * 2}`);
//     return bacteria * 2;
//   }

//   if (minute > 20) {
//     console.log(`${bacteria} 經過最後 20 分鐘變成 ${bacteria * 2}`);
//     bacteria = bacteria * 2;

//     return twoFold(bacteria, minute - 20);
//   }
// }

export { twoFold };
