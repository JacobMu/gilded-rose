import { IStrategy } from "../context";

const MAX_QUALITY = 50;
const LAST_DATE = 0;

export class AgedBrie implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality >= MAX_QUALITY) {
      return this.quality;
    }

    if (this.sellIn >= LAST_DATE) {
      return this.quality + 1;
    }

    return this.quality + 2;
  }

  updateSellIn() {
    return this.sellIn - 1;
  }
}
