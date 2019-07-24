export class BackstagePassStrategy {
	constructor(sellIn, quality) {
		this.sellIn = sellIn;
		this.quality = quality;
	}

	updateQuality() {
		if (this.sellIn < 0) {
			return 0;
		}

		if (this.sellIn < 6) {
			return this.quality + 3;
		}

		if (this.sellIn < 11) {
			return this.quality + 2;
		}

		if (this.sellIn >= 11) {
			return this.quality + 1;
		}
	}

	updateSellIn() {
		return this.sellIn - 1;
	}
}
