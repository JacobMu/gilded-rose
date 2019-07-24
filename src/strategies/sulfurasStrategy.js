export class SulfurasStrategy {
    constructor(sellIn, quality) {
        this.sellIn = sellIn
        this.quality = quality
    }

    updateQuality() {
        return this.quality;
    }

    updateSellIn() {
        return this.sellIn;
    }
}