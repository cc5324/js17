import { getRandomInteger } from "./getRandomInteger.js";

export function loadEquipments({ equipments, maxWeight }) {
  const equipmentTypes = equipments.length;
  const sport = Array(equipmentTypes).fill(0);

  let totalWeight = 0;

  while (totalWeight <= maxWeight) {
    const randomNumber = getRandomInteger(0, equipmentTypes);
    const randomEquipmentWeight = equipments[randomNumber].weight;
    if (randomEquipmentWeight > maxWeight - totalWeight) {
      break;
    }

    totalWeight += randomEquipmentWeight;
    sport[randomNumber] += 1;
  }

  return { totalWeight, sport };
}

export { loadEquipments };
