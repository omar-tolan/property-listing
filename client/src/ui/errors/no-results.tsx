import { Frown} from "lucide-react"
import ListingsContainer, { ListingProps } from "../listings/listings-container"
export default function NoResults({fallbackListings}: {fallbackListings: ListingProps[]}) {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-20">
            <div className="flex mt-20 items-center space-x-2 h-full">
                <Frown size={50} color="#FE7743"/>
                <div className="text-white/80 text-4xl">No Results Found</div>
            </div>
            <div className="flex flex-col items-start">
                <div className="text-md font-extralight text-white text-3xl mx-5 pb-4 mb-4 border-white/10 border-b">Check out our most recent listings</div>
                <ListingsContainer listings={fallbackListings}/>
            </div>
        </div>
    )
}