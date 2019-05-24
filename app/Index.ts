import {AgedBrie} from "./stategies/AgedBrieStrategy";
import {Sulfuras} from "./stategies/SulfurasStrategy";
import {BackStage} from "./stategies/BackstageStrategy";
import {Default} from "./stategies/DefaultStrategy";

import {Item} from "./Item";

enum ItemNames {
    AgedBrie = "Aged Brie",
    Sulfuras = "Sulfuras, Hand of Ragnaros",
    BackStage = "Backstage passes to a TAFKAL80ETC concert"
}

const ItemStrategyMap = {
    [ItemNames.AgedBrie]: AgedBrie,
    [ItemNames.Sulfuras]: Sulfuras,
    [ItemNames.BackStage]: BackStage
};

export function getStrategy(item: Item) {
    return ItemStrategyMap[item.name] || Default;
}
