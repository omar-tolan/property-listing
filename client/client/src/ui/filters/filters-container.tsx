"use client";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import PriceFilterBadge, {
  PriceFilterDropdown,
} from "@/ui/filters/price-filter-badge";
import TypeFilterBadge, { TypeFilterDropdown } from "./type-filter-badge";

type Filters = {
  price: {
    min: number;
    max: number;
    active: boolean;
  };
  types: {
    values: string[];
    active: boolean;
  };
};

export type FilterProps = {
  name: string;
  values: Record<string, any>;
  active: boolean;
};

export default function FiltersContainer() {
  const [openMenu, setOpenMenu] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");
  const handleOpenMenu = (key: string) => {
    setOpenMenu(key);
  };
  const handleApplyFilter = (key: string) => {
    setAppliedFilter(key);
  };
  return (
    <div className="flex relative space-x-2 items-center p-4 bg-black">
      <div className="flex flex-row items-center">
        <SlidersHorizontal size={20} color="white" />
        <div className="text-white text-md font-extralight px-2 py-3 border-r-1 border-gray-500">
          Filters
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex space-x-2 relative">
          <PriceFilterBadge
            handleOpenMenu={handleOpenMenu}
            appliedFilter={appliedFilter}
          />
          <TypeFilterBadge
            handleOpenMenu={handleOpenMenu}
            appliedFilter={appliedFilter}
          />
          <div className="absolute top-[calc(100%+0.25rem)] left-0 right-0">
            {openMenu === "price" && (
              <PriceFilterDropdown
                handleOpenMenu={handleOpenMenu}
                handleApplyFilter={handleApplyFilter}
              />
            )}
            {openMenu === "type" && (
              <TypeFilterDropdown
                handleOpenMenu={handleOpenMenu}
                handleApplyFilter={handleApplyFilter}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
