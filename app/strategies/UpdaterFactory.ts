import {IUpdaterFactory} from "./IUpdaterFactory";
import {IItemUpdater} from "./IItemUpdater";

export class UpdaterFactory implements IUpdaterFactory {
    updaters: Array<IItemUpdater>;
    defaultUpdater: IItemUpdater;

    constructor(updaters: Array<IItemUpdater>, defaultUpdater: IItemUpdater) {
        this.updaters = updaters;
        this.defaultUpdater = defaultUpdater;
    }

    getUpdaterFor(item) {
        return this.updaters.find(updater => updater.isUsableFor(item))
            || this.defaultUpdater;
    }
}
