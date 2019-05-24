import {Item} from "../Item";

export interface IItemUpdater {
    isUsableFor(item: Item);
    update(item: Item);
}
