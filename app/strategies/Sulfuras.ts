import {IItemUpdater} from "./IItemUpdater";

export const SULFURAS = 'Sulfuras, Hand of Ragnaros';

export class Sulfuras implements IItemUpdater {
    isUsableFor(item) {
        return item.name == SULFURAS;
    }

    update(item) {
        return;
    }
}
