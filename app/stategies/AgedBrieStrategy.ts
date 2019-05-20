import {StrategyInterface} from "../interfaces/StrategyInterface";
import {isExpired} from "./Service";

import {MAX_QUALITY} from "../Constants";

export class AgedBrie implements StrategyInterface {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    getUpdatedQuality() {
        const quality = Math.min(this.quality, MAX_QUALITY);

        if (quality >= MAX_QUALITY) {
            return quality;
        }

        if (isExpired(this.sellIn)) {
            return quality + 2;
        }

        return quality + 1;
    }

    getUpdatedSellIn() {
        return this.sellIn - 1;
    }
}