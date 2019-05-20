import { StrategyInterface } from "../interfaces/StrategyInterface";
import {MAX_QUALITY} from "../Constants";

export class Sulfuras implements StrategyInterface {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  getUpdatedQuality() {
    return Math.min(this.quality, MAX_QUALITY);
  }

  getUpdatedSellIn() {
    return this.sellIn;
  }
}
