export class AgedBrieStrategy {
	constructor(sellIn, quality) {
		this.sellIn = sellIn;
		this.quality = quality;
	}

	updateQuality() {
		if (this.quality > 50) {
			return this.quality;
		}
		if (this.sellIn < 0) {
			return this.quality + 2;
		}

		return this.quality + 1;
	}

	updateSellIn() {
		return this.sellIn - 1;
	}
}
