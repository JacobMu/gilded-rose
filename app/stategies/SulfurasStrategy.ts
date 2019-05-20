import { StrategyInterface } from "../interfaces/StrategyInterface";
import {QUALITY_THRESHOLD} from "../Constants";

export class Sulfuras implements StrategyInterface {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  getUpdatedQuality() {
    return Math.min(this.quality, QUALITY_THRESHOLD);
  }

  getUpdatedSellIn() {
    return this.sellIn;
  }
}
