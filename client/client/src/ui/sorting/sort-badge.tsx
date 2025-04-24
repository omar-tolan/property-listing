import { ArrowBigDown, ArrowBigUp, ArrowUp, ArrowDown, Minus } from "lucide-react"
import { Sort } from "./sorts-container"

export function SortBadge({ sort }: { sort: Sort }) {
    return (
        <div className="flex space-x-2 px-4 py-1 items-center bg-white rounded-2xl">
            <div className="text-black text-md">{sort.name}</div>
            {sort.active? ((sort.direction === -1) ? <ArrowUp size={15}/> : <ArrowDown size={15}/>): <Minus size={10}/>}  
        </div>
    )
}