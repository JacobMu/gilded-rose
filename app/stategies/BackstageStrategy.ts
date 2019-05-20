import {StrategyInterface} from "../interfaces/StrategyInterface";

import {ZERO_QUALITY, QUALITY_THRESHOLD, BACKSTAGE} from "../Constants";
import {isExpired} from "./Service";

export class BackStage implements StrategyInterface {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    getUpdatedQuality(): number {
        if (isExpired(this.sellIn)) {
            return ZERO_QUALITY;
        }

        const quality = Math.min(this.quality, QUALITY_THRESHOLD);

        if (quality >= QUALITY_THRESHOLD) {
            return quality;
        }

        if (this.sellIn <= 5) {
            return this.quality + BACKSTAGE.INCREASE_QUALITY_BY.THREE;
        }

        if (this.sellIn <= 10) {
            return this.quality + BACKSTAGE.INCREASE_QUALITY_BY.TWO;
        }

        return this.quality + BACKSTAGE.INCREASE_QUALITY_BY.ONE;
    }

    getUpdatedSellIn(): number {
        return this.sellIn - BACKSTAGE.DECREASE_SELL_IN_BY.ONE;
    }
}
