import {getStrategy} from "./Index";
import {StrategyInterface} from "./interfaces/StrategyInterface";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => this.updateItem(item));
        return this.items;
    }

    updateItem(item: Item) {
        const strategy: StrategyInterface = new (getStrategy(item))(item.sellIn, item.quality);

        item.quality = strategy.getUpdatedQuality();
        item.sellIn = strategy.getUpdatedSellIn();
    }
}