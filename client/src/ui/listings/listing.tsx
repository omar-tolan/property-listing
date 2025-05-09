import { ListingProps } from "./listings-container";
import Features from "./components/features";
import Location from "./components/location";
import Header from "./components/header";
import Description from "./components/description";
import { Price } from "./components/price";
import Image from "next/image";
import Finishing from "./components/finishing";
import CreatedAt from "./components/created-at";
import Amenities from "./components/amenities";
import NavigationProvider from "../providers/navigation-provider";
export default function Listing({ listing }: { listing: ListingProps }) {
  return (
    <NavigationProvider listingId={listing._id}>
    <div className="flex flex-col h-full bg-black border border-white/10 overflow-hidden rounded-2xl cursor-pointer hover:opacity-80"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTBBMEEiLz48L3N2Zz4="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-col w-full space-y-4">
            <div className="flex w-full justify-between items-start">
              <Header
                title={listing.title}
                type={listing.type}
                className="flex-1 border-b border-gray-800 pb-2"
              />
              <div className="flex flex-col md:items-center space-y-2">
                <Location
                  location={listing.location.title}
                  compound={listing.compound.name}
                />
                <Finishing finishing={listing.finishing} />
                <Features
                  bedrooms={listing.features.bedrooms}
                  bathrooms={listing.features.bathrooms}
                  space={listing.area.unit}
                />
              </div>
            </div>
            <Price price={listing.price} />
            <Description description={listing.description} />
            <div className="flex flex-row align-baseline justify-between">
              {/* <div className="flex flex-col space-y-4">

                <CreatedAt createdAt={listing.createdAt} className="h-full " />
              </div> */}
              <Amenities amenities={listing.compound.amenities} className="" />
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-auto">
          <CreatedAt createdAt={listing.createdAt} className="text-gray-400 text-sm" />
        </div>
      </div>
    </div>
    </NavigationProvider>
  );
}
