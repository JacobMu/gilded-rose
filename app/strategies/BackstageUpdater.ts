import {decreaseSellIn, increaseQuality, isExpired, setQualityToMin} from "../ItemMutators";
import {IItemUpdater} from "./IItemUpdater";

export const BACKSTAGE = 'BackstageUpdater passes to a TAFKAL80ETC concert';

export class BackstageUpdater implements IItemUpdater {
     isUsableFor(item) {
        return item.name == BACKSTAGE;
    }

    update(item) {
        increaseQuality(item);
        if (item.sellIn < 11) {
            increaseQuality(item);
        }
        if (item.sellIn < 6) {
            increaseQuality(item);
        }

        decreaseSellIn(item);

        if (isExpired(item)) {
            setQualityToMin(item);
        }
    }
}
