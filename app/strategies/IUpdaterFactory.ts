import {Item} from "../Item";

export interface IUpdaterFactory {
    getUpdaterFor(item: Item);
}
