import { getPropertyDetails } from "@/data/properties";
import CompoundCard from "@/ui/listing/compound-card";
import ImageCarousel from "@/ui/listing/gallery";
import PropertyDetails from "@/ui/listing/property-details";

export default async function PropertyPage({
  params,
}: {
  params: { propertyId: string };
}) {
  const { propertyId } = await params;
  const listing = await getPropertyDetails(propertyId);
  const compoundDetails = {
    name: listing.compound.name,
    launchDate: listing.compound.launchDate,
    amenities: listing.compound.amenities,
    location: {
      coordinates: listing.location.coordinates,
      title: listing.location.title,
    },
  };
  return (
    <div className="flex flex-col px-8 py-10 lg:px-15 h-full items-center justify-center">
      <div className="flex flex-col space-y-5 lg:flex-row h-full w-full lg:space-x-20 lg:justify-between items-start">
        <div className="flex flex-col w-full">
          <div className="relative w-full lg:w-[60dvw] max-h-[70dvh] rounded-lg overflow-hidden">
            <ImageCarousel
              images={[...listing.images, ...listing.plans]}
              className="w-full h-[50dvh]"
            />
          </div>          
          <PropertyDetails property={listing} />          
        </div>
        <CompoundCard compound={compoundDetails} className="w-full lg:w-[40dvw] h-full" />
      </div>
    </div>
  );
}
