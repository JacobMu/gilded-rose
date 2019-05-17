import {IStrategy} from "../interfaces/strategy-interface";

import {ZERO_QUALITY} from "../constants";
import {isExpired} from "./Service";

export class BackStage implements IStrategy {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        if (isExpired(this.sellIn)) {
            return ZERO_QUALITY;
        }

        const quality = Math.min(this.quality, 50);

        if (quality >= 50) {
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

    updateSellIn() {
        return this.sellIn - 1;
    }
}
