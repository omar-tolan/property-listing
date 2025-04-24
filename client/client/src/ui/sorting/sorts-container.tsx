import { ArrowUpDownIcon } from "lucide-react";
import { SortBadge } from "./sort-badge";

export type Sort = {
  name: string;
  direction: 1 | -1;
  active: boolean;
};

export function SortsContainer() {
  return (
    <div className="flex space-x-2 items-center p-4 bg-black">
      <div className="flex flex-row items-center">
        <ArrowUpDownIcon color="white" />
        <div className="text-white text-md font-extralight px-2 py-3 border-r-1 border-gray-500">
          Sort By
        </div>
      </div>
      <div className="flex space-x-2">
      <SortBadge sort={{ name: "price", direction: 1, active: true }} />
      <SortBadge sort={{ name: "location", direction: -1, active: false }} />
      <SortBadge sort={{ name: "recent", direction: 1, active: false }} />
    
      </div>
    </div>
  );
}
