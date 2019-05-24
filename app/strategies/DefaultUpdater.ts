import {decreaseQuality, decreaseSellIn, isExpired} from "../ItemMutators";
import {IItemUpdater} from "./IItemUpdater";

export class DefaultUpdater implements IItemUpdater {
    isUsableFor(item) {
        return true;
    }

    update(item) {
        decreaseQuality(item);

        decreaseSellIn(item);

        if (isExpired(item)) {
            decreaseQuality(item)
        }
    }
}
