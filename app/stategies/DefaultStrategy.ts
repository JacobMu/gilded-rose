import { IStrategy } from "../context";

export class Default implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.sellIn <= 0) {
      return this.quality - 2;
    }
    return this.quality - 1;
  }

  updateSellIn() {
    return this.sellIn - 1;
  }
}
