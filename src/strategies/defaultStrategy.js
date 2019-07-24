export class DefaultStrategy {
	constructor(sellIn, quality) {
		this.sellIn = sellIn;
		this.quality = quality;
	}

	updateQuality() {
		if (this.sellIn < 0) {
			console.log(this.quality);
			return this.quality - 2;
		}

		return this.quality - 1;
	}

	updateSellIn() {
		return this.sellIn - 1;
	}
}
