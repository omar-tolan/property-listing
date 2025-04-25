import { getProperties } from "@/data/properties";
import ServerError from "@/ui/errors/server-error";
import { ApiError } from "@/core/api-error";
import ListingsContainer from "@/ui/listings/listings-container";
import { ListingProps } from "@/ui/listings/listings-container";
export default async function Home() {
  try {
    const res = await getProperties();
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
