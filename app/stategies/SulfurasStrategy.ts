import { IStrategy } from "../context";

export class Sulfuras implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    return this.quality;
  }

  updateSellIn() {
    return this.sellIn - 1;
  }
}
