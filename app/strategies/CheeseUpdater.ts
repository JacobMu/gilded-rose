import {decreaseSellIn, increaseQuality, isExpired} from "../ItemMutators";
import {IItemUpdater} from "./IItemUpdater";

export const AGED_BRIE = 'Aged Brie';

export class CheeseUpdater implements IItemUpdater {
    isUsableFor(item) {
        return item.name == AGED_BRIE;
    }

    update (item) {
        increaseQuality(item);

        decreaseSellIn(item);

        if (isExpired(item)) {
            increaseQuality(item);
        }
    }
}
