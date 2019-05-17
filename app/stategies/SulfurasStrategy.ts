import { IStrategy } from "../interfaces/strategy-interface";

export class Sulfuras implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    return Math.min(this.quality, 50);
  }

  updateSellIn() {
    return this.sellIn;
  }
}
