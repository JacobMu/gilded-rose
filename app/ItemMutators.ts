export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export function decreaseSellIn(item) {
    item.sellIn -= 1;
}

export function increaseQuality(item) {
    if (item.quality < MAX_QUALITY) {
        item.quality += 1
    }
}

export function decreaseQuality(item) {
    if (item.quality > MIN_QUALITY) {
        item.quality -= 1;
    }
}

export function isExpired(item) {
    return item.sellIn < 0;
}

export function setQualityToMin(item) {
    item.quality = MIN_QUALITY
}
