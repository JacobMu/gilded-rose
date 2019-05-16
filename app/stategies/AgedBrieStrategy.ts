import { IStrategy } from "../interfaces/strategy-interface";
import { MAX_QUALITY, LAST_DATE, INCREASE, DECREASE } from "../constants";

export class AgedBrie implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality <= MAX_QUALITY) {
      return getUpdatedQuality(this.sellIn, this.quality);
    }
    return this.quality;
  }

  updateSellIn() {
    return this.sellIn - DECREASE.BY_ONE;
  }
}

function getUpdatedQuality(sellIn: number, quality: number): number {
  if (sellIn >= LAST_DATE) {
    return quality + INCREASE.BY_ONE;
  }

  return quality + INCREASE.BY_TWO;
}
