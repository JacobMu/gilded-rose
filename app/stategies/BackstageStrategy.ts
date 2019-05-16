import { IStrategy } from "../interfaces/strategy-interface";
import { LAST_DATE, INCREASE, DECREASE, ZERO_QUALITY } from "../constants";

export class BackStage implements IStrategy {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.sellIn <= LAST_DATE) {
      return ZERO_QUALITY;
    }

    if (this.sellIn <= 6) {
      return this.quality + INCREASE.BY_THREE;
    }

    if (this.sellIn <= 11) {
      return this.quality + INCREASE.BY_TWO;
    }

    if (this.sellIn > 11) {
      return this.quality + INCREASE.BY_ONE;
    }
  }

  updateSellIn() {
    return this.sellIn - DECREASE.BY_ONE;
  }
}
