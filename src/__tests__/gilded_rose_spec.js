import { Shop, Item } from "../gilded_rose";

function shopFactory(item, sellIn = 0, quality = 0) {
	return new Shop([new Item(item, sellIn, quality)]);
}

const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const FOO = "foo";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const AGED_BRIE = "Aged Brie";

describe("Gilded Rose", function() {
	describe("#shop constructor", () => {
		it("sets an empty array if no argument is present", () => {
			const gildedRose = new Shop();

			const items = gildedRose.updateQuality();

			expect(items.length).toEqual(0);
			expect(items).toBeInstanceOf(Array);
		});
	});

	describe("#updateQuality", () => {
		describe("Foo item", () => {
			it("return item named foo", function() {
				const gildedRose = shopFactory(FOO, 0, 0);

				const items = gildedRose.updateQuality();

				expect(items[0].name).toEqual(FOO);
			});

			it("decreases quality of foo item by 1 if sellIn >= 0", () => {
				const gildedRose = shopFactory(FOO, 1, 2);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(1);
			});

			it("decreases quality of foo item by 2 if sellIn < 0", () => {
				const gildedRose = shopFactory(FOO, -1, 3);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(1);
			});

			it("decreases sellIn date of foo item by 1", () => {
				const gildedRose = shopFactory(FOO, 1);

				const items = gildedRose.updateQuality();

				expect(items[0].sellIn).toEqual(0);
			});
		});

		describe("Aged Brie item", () => {
			it("increases quality of Aged Brie item by 1 if sellIn >= 0", () => {
				const gildedRose = shopFactory(AGED_BRIE, 1);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(1);
			});

			it("increases quality of Aged Brie item by 2 if sellIn < 0", () => {
				const gildedRose = shopFactory(AGED_BRIE, -1);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(2);
			});

			it("does not increase quality of Aged Brie item if quality > 50 and sellIn < 0", () => {
				const gildedRose = shopFactory(AGED_BRIE, -1, 54);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(54);
			});
		});

		describe("Sulfuras item", () => {
			it("decreases sellIn of any item except Sulfuras by 1", () => {
				const gildedRose = shopFactory(AGED_BRIE);

				const items = gildedRose.updateQuality();

				expect(items[0].sellIn).toEqual(-1);
			});

			it("does not decrease sellIn of Sulfuras item", () => {
				const gildedRose = shopFactory(SULFURAS);

				const items = gildedRose.updateQuality();

				expect(items[0].sellIn).toEqual(0);
			});

			it("does not decrease quality of Sulfuras item", () => {
				const gildedRose = shopFactory(SULFURAS, 0, 50);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(50);
			});

			it("does not decrease quality of Sulfuras item if sellIn < 0", () => {
				const gildedRose = shopFactory(SULFURAS, -1, 54);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(54);
			});
		});

		describe("Backstage pass", () => {
			it("increases quality by 1 if sellIn >= 11 and quality < 50", () => {
				const gildedRose = shopFactory(BACKSTAGE, 11);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(1);
			});

			it("increases quality by 2 if quality < 11 and quality < 50", () => {
				const gildedRose = shopFactory(BACKSTAGE, 10);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(2);
			});

			it("increases quality by one if quality < 6 and quality < 50", () => {
				const gildedRose = shopFactory(BACKSTAGE, 5);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(3);
			});

			it("decreases quality to 0 if sellIn < 0", () => {
				const gildedRose = shopFactory(BACKSTAGE, -1, 50);

				const items = gildedRose.updateQuality();

				expect(items[0].quality).toEqual(0);
			});
		});
	});
});
