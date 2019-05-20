import {MINIMUM_SELL_IN} from "../Constants";

export function isExpired(sellIn: number): boolean {
    return sellIn <= MINIMUM_SELL_IN;
}