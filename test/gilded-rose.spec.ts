import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function() {
  describe("# constructor", () => {
    it("should be instance of Array", () => {
      const gildedRose = new GildedRose();

      const items = gildedRose.updateQuality();

      expect(items.length).to.equal(0);
      expect(items).to.be.instanceOf(Array);
    });
  });

  describe("# functionality", () => {
    it("should return Foo item ", function() {
      const gildedRose = new GildedRose([new Item("foo", 0, 0)]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).to.equal("foo");
    });

    it("should decrease quality of Foo by one", () => {
      const gildedRose = new GildedRose([new Item("Foo", 1, 5)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(4);
    });

    it("should not decrease quality of item if item is Sulfuras", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 5)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(5);
    });

    it("should increase quality of Aged Brie by one", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 40)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(41);
    });

    it("should not increase quality of Backstage passes or Aged Brie if quality >= 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(50);
    });

    it("should increase quality of Backstage passes by 1 if sellIn date>= 11 days", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(41);
    });

    it("should increase quality of Backstage passes by 2 if sellIn date < 11 days", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(42);
    });

    it("should increase quality of Backstage passes by 3 if sellIn date < 6 days", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(43);
    });

    it("should decrease sellIn date by one if item is not Sulfuras", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).to.equal(4);
    });

    it("should decrease quality of Foo by 2 is sellIn date < 0", () => {
      const gildedRose = new GildedRose([new Item("Foo", -1, 40)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(38);
    });

    it("should not change Sulfuras's quality if sellIn dagte < 0", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", -1, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(40);
    });

    it("should decrease Backstage passes's quality to zero if sellIn date < 0", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40)
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(0);
    });

    it("should increase Aged Bries's quality by two if sellIn date < 0", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 40)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(42);
    });

    it("should not increase Aged Bries's quality by two if sellIn date < 0 yet quality if over 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 51)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.equal(51);
    });
  });
});
