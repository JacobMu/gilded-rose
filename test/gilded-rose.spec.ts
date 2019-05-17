import {expect} from "chai";
import {Item, GildedRose} from "../app/gilded-rose";

const SELL_IN_ZERO = 0;
const SELL_IN_ONE = 1;
const SELL_IN_FIVE = 5;
const SELL_IN_TEN = 10;
const SELL_IN_ELEVEN = 11;

const QUALITY_ONE = 1;
const QUALITY_MAX = 50;

const ITEM_NAME_SULFURAS = "Sulfuras, Hand of Ragnaros";
const ITEM_NAME_AGED_BRIE = "Aged Brie";
const ITEM_NAME_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const ITEM_NAME_DEFAULT = "Default";

const getShopWithDefaultItem =
    (sellIn: number, quality: number) =>
        new GildedRose([new Item(ITEM_NAME_DEFAULT, sellIn, quality)]);

const getShopWithSulfuras = (sellIn: number, quality: number) =>
    new GildedRose([new Item(ITEM_NAME_SULFURAS, sellIn, quality)]);

const getShopWithAgedBrie = (sellIn: number, quality: number) =>
    new GildedRose([new Item(ITEM_NAME_AGED_BRIE, sellIn, quality)]);

const getShowWithBackStagePasses = (sellIn: number, quality: number) =>
    new GildedRose([new Item(ITEM_NAME_BACKSTAGE, sellIn, quality)]);

describe("GildedRose", function () {
    describe("#constructor", () => {
        it("sets item property to empty array when no argument is present", () => {
            const gildedRose = new GildedRose();

            const items = gildedRose.updateQuality();

            expect(items.length).to.equal(0);
            expect(items).to.be.instanceOf(Array);
        });
    });
    describe('#updateQuality', function () {
        describe("Default Item", () => {
            it("does not change the name of the item", function () {
                const gildedRose = getShopWithDefaultItem(1, 2);

                const items = gildedRose.updateQuality();

                expect(items[0].name).to.equal(ITEM_NAME_DEFAULT);
            });

            it("decreases quality by 1 when sellIn > 0 and quality > 0", () => {
                const gildedRose = getShopWithDefaultItem(SELL_IN_ONE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(0);
            });

            it("decreases quality by 2 when sellIn <= 0", () => {
                const gildedRose = getShopWithDefaultItem(SELL_IN_ZERO, QUALITY_MAX);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(48);
            });
        });
        describe("Sulfuras Item", () => {
            it("does not change quality", () => {
                const gildedRose = getShopWithSulfuras(SELL_IN_ONE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(QUALITY_ONE);
            });

            it("does not change sellIn", () => {
                const gildedRose = getShopWithSulfuras(SELL_IN_ONE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].sellIn).to.equal(SELL_IN_ONE);
            });
        });
        describe("Aged Brie Item", () => {
            it("increases quality by 1 if sellIn > 0", () => {
                const gildedRose = getShopWithAgedBrie(SELL_IN_ONE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(2);
            });

            it("does not increase when quality = 50", () => {
                const gildedRose = getShopWithAgedBrie(SELL_IN_ONE, QUALITY_MAX);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(50);
            });

            it(" increase quality by 2 when sellIn <= 0", () => {
                const gildedRose = getShopWithAgedBrie(SELL_IN_ZERO, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(3);
            });

            it("does not increase quality by 2 when sellIn <= 0 and quality >= 50", () => {
                const gildedRose = getShopWithAgedBrie(SELL_IN_ZERO, QUALITY_MAX);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(50);
            });
        });
        describe("Backstage Passes Item", () => {
            it("increases quality by 1 when sellIn >= 11 days", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_ELEVEN, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(2);
            });

            it("increases quality by 2 when sellIn <= 10 days", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_TEN, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(3);
            });

            it("increases quality by 3 when sellIn <= 5 days", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_FIVE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(4);
            });

            it("decreases sellIn by 1", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_FIVE, QUALITY_ONE);

                const items = gildedRose.updateQuality();

                expect(items[0].sellIn).to.equal(4);
            });

            it("decreases quality to zero when sellIn = 0", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_ZERO, QUALITY_MAX);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.equal(0);
            });

            it("does not update quality when quality > 50 and sellIn > 0", () => {
                const gildedRose = getShowWithBackStagePasses(SELL_IN_ONE, QUALITY_MAX);

                const items = gildedRose.updateQuality();

                expect(items[0].quality).to.eql(50);
            });
        });

    });
});
