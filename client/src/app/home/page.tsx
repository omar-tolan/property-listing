import { getProperties } from "@/data/properties";
import ServerError from "@/ui/errors/server-error";
import { ApiError } from "@/core/api-error";
import ListingsContainer from "@/ui/listings/listings-container";
import { ListingProps } from "@/ui/listings/listings-container";

export type Params = {
  searchString: string | null;
  type: string[] | null;
  minPrice: number | null;
  maxPrice: number | null;
  location: string | null;
  recent: string | null;
  price: string | null;
};
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    const params: Params = {
      //Search Term
      searchString:
        typeof searchParams?.search === "string" ? searchParams.search : null,
      // Property Types
      type:
        typeof searchParams?.type === "string"
          ? searchParams.type.split(",")
          : null,
      // Price Filters
      minPrice: searchParams?.minPrice ? Number(searchParams.minPrice) : null,
      maxPrice: searchParams?.maxPrice ? Number(searchParams.maxPrice) : null,
      // Location Sort
      location:
        typeof searchParams?.location === "string"
          ? searchParams.location
          : null,
      // Price Sort
      price:
        typeof searchParams?.price === "string" ? searchParams.price : null,

      // Recent Sort
      recent:
        typeof searchParams?.recent === "string" ? searchParams.recent : null,
    };
    const res = await getProperties(params);
    const properties: ListingProps[] = res.data;
    return (
      <div>
        <ListingsContainer listings={properties} />
      </div>
    );
  } catch (error) {
    switch ((error as ApiError).type) {
      case "NOT_FOUND":
        return <ServerError />;
      case "NETWORK":
        return <ServerError />;
      case "BAD_REQUEST":
        return <ServerError />;
      case "INTERNAL":
        return <ServerError />;
      default:
        return <ServerError />;
    }
  }
}
