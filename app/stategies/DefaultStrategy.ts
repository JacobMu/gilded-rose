import { IStrategy } from "../interfaces/strategy-interface";
import { ZERO_QUALITY, DECREASE } from "../constants";

export class Default implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality <= ZERO_QUALITY) {
      return ZERO_QUALITY;
    }
    
    if (this.sellIn <= 0) {
      return this.quality - DECREASE.BY_TWO;
    }
    return this.quality - DECREASE.BY_ONE;
  }

  updateSellIn() {
    return this.sellIn - DECREASE.BY_ONE;
  }
}
