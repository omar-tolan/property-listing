import { MapPinIcon } from "lucide-react";
import { ListingProps } from "./listings-container";
export default function Listing({ listing }: { listing: ListingProps }) {
  let priceString = listing.price.toString()
  const length = priceString.length;
  for (let i = length - 3; i > 0; i -= 3) {
    priceString = priceString.slice(0, i) + "," + priceString.slice(i);
  }
  const iconsColor = "#FE7743"
  return (
    <div className="flex flex-col h-[70vh] bg-black border border-white pb-4 rounded-2xl">
      <div className="text-black text-center bg-white w-full h-[50%] rounded-t-2xl">
        Photo
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col">
            <div className="text-gray-400 text-sm font-medium">
              {listing.type}
            </div>
            <div className="text-white text-lg font-medium">
              {listing.title}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon size={20} color={iconsColor} />
            <span className="text-white text-sm font-light">
              {listing.location.title}
            </span>
          </div>
        </div>
        <div className="w-full">
          <div className="text-white text-2xl font-light">
            {priceString} EGP
          </div>
        </div>
      </div>
    </div>
  );
}
