export function Price({ price, className }: { price: number; className?: string }) {
  let priceString = price.toString();
  const length = priceString.length;
  for (let i = length - 3; i > 0; i -= 3) {
    priceString = priceString.slice(0, i) + "," + priceString.slice(i);
  }
  return (
    <div className={className+" w-full"}>
      <div className="text-white text-3xl font-light">{priceString} EGP</div>
    </div>
  );
}
