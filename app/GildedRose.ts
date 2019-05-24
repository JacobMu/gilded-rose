import {Item} from "./Item";
import {IUpdaterFactory} from "./strategies/IUpdaterFactory";

export class GildedRose {
    items: Array<Item>;
    updaterFactory: IUpdaterFactory;

    constructor(items = [] as Array<Item>, updaterFactory: IUpdaterFactory) {
        this.updaterFactory = updaterFactory;
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => this.updateItem(item));
        return this.items;
    }

    updateItem(item) {
        const updater = this.updaterFactory.getUpdaterFor(item);

        updater.update(item);
    }
}
