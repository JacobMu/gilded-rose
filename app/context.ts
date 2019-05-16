import { AgedBrie } from "./stategies/AgedBrieStrategy";
import { Sulfuras } from "./stategies/SulfurasStrategy";
import { BackStage } from "./stategies/BackstageStrategy";
import { Default } from "./stategies/DefaultStrategy";

import { Item } from "./gilded-rose";

enum ItemNames {
  AgedBrie = "Aged Brie",
  Sulfuras = "Sulfuras, Hand of Ragnaros",
  BackStage = "Backstage passes to a TAFKAL80ETC concert"
}

const ItemStrategyMap = {
  AgedBrie,
  Sulfuras,
  BackStage
};

export function updateItem(item: Item) {
  const strategy = getStrategy(item)[0];

  if (!strategy) {
    return new Default(item.sellIn, item.quality);
  }

  return new ItemStrategyMap[strategy](item.sellIn, item.quality);
}

function getStrategy(item: Item) {
  return Object.keys(ItemNames).filter(key => {
    return ItemNames[key] === item.name;
  });
}
