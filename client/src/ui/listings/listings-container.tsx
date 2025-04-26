import Listing from "./listing";

export type ListingProps = {
  _id: string;
  title: string;
  type: string;
  price: number;
  description: string;
  images: string[];
  area: {
    unit: number;
    garden: number;
    terrace: number;
    roof: number;
  };
  features: {
    bathrooms: number;
    bedrooms: number;
    floors: number;
  };
  finishing: string;
  plans?: string[];
  location: {
    title: string;
    type: string;
    coordinates: number[];
  };
  compound: {
    name: string;
    launchDate: Date;
    amenities: string[];
  };
  paymentPlan: {
    installment: number;
    downPayment: number;
  };
  createdAt: Date;
  updatedAt: Date;
};

export default function ListingsContainer({
  listings,
}: {
  listings: ListingProps[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {listings.map((listing) => (
        <div key={listing.title} className="h-full">
          <Listing listing={listing} />
        </div>
      ))}
    </div>
  );
}
