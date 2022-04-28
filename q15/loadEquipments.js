import { getRandomInteger } from "./getRandomInteger.js";

function loadEquipments({ equipments, maxWeight }) {
  const equipmentTypes = equipments.length;
  const sport = Array(equipmentTypes).fill(0);

  let totalWeight = 0;

  while (totalWeight <= maxWeight) {
    const randomIndex = getRandomInteger(0, equipmentTypes);
    const randomEquipmentWeight = equipments[randomIndex].weight;
    if (randomEquipmentWeight > maxWeight - totalWeight) {
      break;
    }

    totalWeight += randomEquipmentWeight;
    sport[randomIndex] += 1;
  }

  return { totalWeight, sport };
}

export { loadEquipments };
