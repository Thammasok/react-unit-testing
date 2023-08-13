import { pointRateConfig } from "./point.func";

export const calculatePointByPrice = (price: number): number => {
  return Math.floor(price / 100)
}

export const calculatePointRateByPrice = (price: number): number => {
  const pr = pointRateConfig();

  return Math.floor(price / pr);
}
