export function formatPrice(price: number): string{
    let priceString = price.toString();
    const length = priceString.length;
    for (let i = length - 3; i > 0; i -= 3) {
      priceString = priceString.slice(0, i) + "," + priceString.slice(i);
    }
    return priceString
}