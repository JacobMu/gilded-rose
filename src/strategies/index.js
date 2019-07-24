import { AgedBrieStrategy } from "./agedBrieStrategy.js";
import { BackstagePassStrategy } from "./backstagePassStrategy.js";
import { SulfurasStrategy } from "./sulfurasStrategy.js";
import { DefaultStrategy } from "./defaultStrategy.js";

const strategies = {
	["Aged Brie"]: AgedBrieStrategy,
	["Backstage passes to a TAFKAL80ETC concert"]: BackstagePassStrategy,
	["Sulfuras, Hand of Ragnaros"]: SulfurasStrategy
};

export function getStrategy(itemName) {
	return strategies[itemName] || DefaultStrategy;
}
