`
15. 有一輛搬運車，限重 1 噸 (不能超重)，
啞鈴每箱重 30kg，單槓每箱重 20kg，跑步機一台重 50kg，
在不將空間列入考慮的情況下，
設一陣列 sport[3] 用來儲存三種器材的數量，
以一亂數決定每次要搬到車上的器材為何，
當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
`;
import { loadEquipments } from "./loadEquipments.js";

//TODO jest mock 測試

main();

function main() {
  const equipments = [
    {
      name: "dumbbell",
      weight: 30,
    },
    {
      name: "bar",
      weight: 20,
    },
    {
      name: "treadmill",
      weight: 50,
    },
  ];

  const { totalWeight, sport } = loadEquipments({
    equipments,
    maxWeight: 1000,
  });

  sport.forEach((amount, index) => {
    console.log(`${equipments[index].name} : 有 ${amount} 個`);
  });
  console.log(`totalWeight: %d`, totalWeight);
}
