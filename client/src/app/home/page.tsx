import { getProperties } from "@/data/properties";
import ServerError from "@/ui/errors/server-error";
import { ApiError } from "@/core/api-error";
import ListingsContainer from "@/ui/listings/listings-container";
import { ListingProps } from "@/ui/listings/listings-container";
import NoResults from "@/ui/errors/no-results";

export type Params = {
  searchString: string | null;
  type: string[] | null;
  minPrice: number | null;
  maxPrice: number | null;
  location: string | null;
  recent: string | null;
  price: string | null;
  page: number | null;
  limit: number|null;
};
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  try {
    const rawParams: any =  await searchParams
    const params: Params = {
      //Search Term
      searchString:
        typeof rawParams?.search === "string" ? rawParams.search : null,
      // Property Types
      type:
        typeof rawParams?.type === "string"
          ? rawParams.type.split(",")
          : null,
      // Price Filters
      minPrice: rawParams?.minPrice ? Number(rawParams.minPrice) : null,
      maxPrice: rawParams?.maxPrice ? Number(rawParams.maxPrice) : null,
      // Location Sort
      location:
        typeof rawParams?.location === "string"
          ? rawParams.location
          : null,
      // Price Sort
      price:
        typeof rawParams?.price === "string" ? rawParams.price : null,

      // Recent Sort
      recent:
        typeof rawParams?.recent === "string" ? rawParams.recent : null,
      page: 
      typeof rawParams?.page ? Number(rawParams.page) : null,
      limit: 
      typeof rawParams?.limit ? Number(rawParams.limit) : null,
    };
    const res = await getProperties(params);
    const properties: ListingProps[] = res.data;
    if (properties.length == 0) {
      const fallbackParams: Params = {
        //Search Term
        searchString: null,
        type: null,
        // Price Filters
        minPrice: null,
        maxPrice: null,
        // Location Sort
        location: null,
        // Price Sort
        price: null,
        // Recent Sort
        recent: "desc",
        page: 1,
        limit: 3,
      };
      const fallbackRes = await getProperties(fallbackParams);
      const fallbackListings = fallbackRes.data
      return <NoResults fallbackListings={fallbackListings}/>;
    }
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
