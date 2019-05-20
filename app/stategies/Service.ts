import {SELL_BY} from "../Constants";

export function isExpired(sellIn: number): boolean {
    return sellIn <= SELL_BY;
}