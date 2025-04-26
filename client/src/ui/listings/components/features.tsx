import { BedDouble, Bath, RulerDimensionLine } from "lucide-react";

const iconsColor = "#FE7743"

export default function Features({ bedrooms, bathrooms, space}: { bedrooms: number, bathrooms: number, space: number }) {
    return ( 
          <div className="flex">
            <div className=" border-gray-500 border-r px-2 flex flex-row items-center space-x-1">
              <BedDouble size={20} color={iconsColor} />
              <p className="text-white text-sm font-light">{bedrooms}</p>
            </div>
            <div className="border-gray-500 border-r px-2 flex flex-row items-end space-x-1">
              <Bath size={20} color={iconsColor} />
              <p className="text-white text-sm font-light">{bathrooms}</p>
            </div>
            <div className="px-2 flex flex-row items-end space-x-1">
              <RulerDimensionLine size={20} color={iconsColor} />
              <p className="text-white text-sm font-light">{space} m<sup>2</sup></p>
            </div>
          </div>
    )
} 