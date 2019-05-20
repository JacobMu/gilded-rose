import {StrategyInterface} from "../interfaces/StrategyInterface";
import {isExpired} from "./Service";

import {AGED_BRIE, QUALITY_THRESHOLD} from "../Constants";

export class AgedBrie implements StrategyInterface {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    getUpdatedQuality() {
        const quality = Math.min(this.quality, QUALITY_THRESHOLD);

        if (quality >= QUALITY_THRESHOLD) {
            return quality;
        }

        if (!isExpired(this.sellIn)) {
            return quality + AGED_BRIE.INCREASE_QUALITY_BY.ONE;
        }
        return quality + AGED_BRIE.INCREASE_QUALITY_BY.TWO;
    }

    getUpdatedSellIn() {
        return this.sellIn - AGED_BRIE.DECREASE_SELL_IN_BY.ONE;
    }
}