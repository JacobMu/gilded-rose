import {StrategyInterface} from "../interfaces/StrategyInterface";

import {ZERO_QUALITY, MAX_QUALITY} from "../Constants";
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

        const quality = Math.min(this.quality, MAX_QUALITY);

        if (quality >= MAX_QUALITY) {
            return quality;
        }

        if (this.sellIn <= 5) {
            return this.quality + 3;
        }

        if (this.sellIn <= 10) {
            return this.quality + 2;
        }

        return this.quality + 1;
    }

    getUpdatedSellIn(): number {
        return this.sellIn - 1;
    }
}
