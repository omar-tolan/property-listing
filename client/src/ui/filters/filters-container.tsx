"use client";
import { FunnelPlus, FunnelX, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import PriceFilterBadge, {
  PriceFilterDropdown,
} from "@/ui/filters/price-filter-badge";
import TypeFilterBadge, { TypeFilterDropdown } from "./type-filter-badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Price } from "../listings/components/price";

export type Filters = {
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

export default function FiltersContainer({
  className,
}: {
  className?: string;
}) {
  const [openMenu, setOpenMenu] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const minPrice =
    params.get("minPrice") == null ? -1 : Number(params.get("minPrice"));
  const maxPrice =
    params.get("maxPrice") == null
      ? 1000000000000
      : Number(params.get("maxPrice"));
  const selectedTypes = params.get("type")?.split(",") || [];
  const [filters, setFilters] = useState<Filters>({
    price: {
      min: minPrice,
      max: maxPrice,
      active: minPrice != -1 && maxPrice != 1000000000000,
    },
    types: {
      values: selectedTypes,
      active: selectedTypes != null && selectedTypes.length != 0,
    },
  });
  const handleSetPriceFilter = (newPrices: number[]) => {
    const filter: Filters = {
      price: {
        min: newPrices[0],
        max: newPrices[1],
        active: false,
      },
      types: filters.types,
    };
    setFilters(filter);
  };
  const handleSetTypesFilter = (newTypes: string[]) => {
    const filter: Filters = {
      price: filters.price,
      types: {
        values: newTypes,
        active: false,
      },
    };
    setFilters(filter);
  };
  const applyFilter = () => {
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set("minPrice", filters.price.min.toString());
    searchParams.set("maxPrice", filters.price.max.toString());
    if (filters.types.values.length > 0) {
      searchParams.set("type", filters.types.values.join(","));
    }
    setFilters({
      price: {
        active: filters.price.min != -1 && filters.price.max != 1000000000000,
        min: filters.price.min,
        max: filters.price.max,
      },
      types: {
        active: filters.types.values.length != 0,
        values: filters.types.values,
      },
    });
    router.push(`/home?${searchParams.toString()}`);
  };
  const resetFilter = (resetFilter?: string) => {
    const searchParams = new URLSearchParams(params.toString());
    if (!resetFilter) {
      searchParams.delete("minPrice");
      searchParams.delete("maxPrice");
      searchParams.delete("type");
      setFilters({
        price: {
          min: -1,
          max: 1000000000000,
          active: false,
        },
        types: {
          values: [],
          active: false,
        },
      });
    }
    if (resetFilter == "price") {
      searchParams.delete("minPrice");
      searchParams.delete("maxPrice");
      setFilters({
        price: {
          min: -1,
          max: 1000000000000,
          active: false,
        },
        types: filters.types,
      });
    }
    if (resetFilter == "types") {
      searchParams.delete("type");
      setFilters({
        price: filters.price,
        types: {
          values: [],
          active: false,
        },
      });
    }
    router.push(`/home?${searchParams.toString()}`);
  };
  const handleOpenMenu = (key: string) => {
    setOpenMenu(key);
  };
  const handleApplyFilter = (key: string) => {
    setAppliedFilter(key);
  };
  return (
    <div
      className={
        "flex relative space-x-2 items-center p-4 bg-black " + className
      }
    >
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
            appliedFilter={filters.price.active}
          />
          <TypeFilterBadge
            handleOpenMenu={handleOpenMenu}
            appliedFilter={filters.types.active}
          />
          <div className="inline-block relative">
            <button
              className={`flex space-x-2 px-4 py-1 items-center rounded-lg bg-white ${ !(filters.price.active || filters.types.active) ? "opacity-40" : "cursor-pointer hover:bg-white/90"}`}
              onClick={() => {
                resetFilter();
              }}
            >
              <div className="text-black text-md">Clear Filters</div>
            </button>
          </div>
          <div className="absolute top-[calc(100%+0.25rem)] left-0 right-0">
            {openMenu === "price" && (
              <PriceFilterDropdown
                handleOpenMenu={handleOpenMenu}
                handleResetFilter={resetFilter}
                handleApplyFilter={applyFilter}
                handleSetFilter={handleSetPriceFilter}
                price={[filters.price.min, filters.price.max]}
                mode="navbar"
              />
            )}
            {openMenu === "type" && (
              <TypeFilterDropdown
                handleOpenMenu={handleOpenMenu}
                handleResetFilter={resetFilter}
                handleApplyFilter={applyFilter}
                handleSetFilter={handleSetTypesFilter}
                selectedTypes={filters.types.values}
                mode="navbar"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
