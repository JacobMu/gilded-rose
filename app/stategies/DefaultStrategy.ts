import {StrategyInterface} from "../interfaces/StrategyInterface";
import {isExpired} from "./Service";

import {DEFAULT, QUALITY_THRESHOLD} from "../Constants";

export class Default implements StrategyInterface {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    getUpdatedQuality() {
        const quality = Math.min(this.quality, QUALITY_THRESHOLD);
        if (isExpired(this.sellIn)) {
            return quality - DEFAULT.DECREASE_QUALITY_BY.TWO;
        }

        return quality - DEFAULT.DECREASE_QUALITY_BY.ONE;

    }

    getUpdatedSellIn() {
        return this.sellIn - DEFAULT.DECREASE_SELL_IN_BY.ONE;
    }
}
