import { updateItem } from "./context";
import { IStrategy } from "./interfaces/strategy-interface";

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
    this.items.forEach(item => {
      const updatedItem: IStrategy = updateItem(item);
      item.quality = updatedItem.updateQuality();
      item.sellIn = updatedItem.updateSellIn();
    });

    return this.items;
  }
}
