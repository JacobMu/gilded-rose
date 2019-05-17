import {IStrategy} from "../interfaces/strategy-interface";
import {isExpired} from "./Service";

export class Default implements IStrategy {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        const quality = Math.min(this.quality, 50);

        if (isExpired(this.sellIn)) {
            return quality - 2;
        }

        return quality - 1;

    }

    updateSellIn() {
        return this.sellIn - 1;
    }
}
