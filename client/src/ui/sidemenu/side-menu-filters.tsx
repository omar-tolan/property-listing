"use client";
import { useState } from "react";
import { PriceFilterDropdown } from "../filters/price-filter-badge";
import { TypeFilterDropdown } from "../filters/type-filter-badge";
import { SortsContainer } from "../sorting/sorts-container";
import { useRouter, useSearchParams } from "next/navigation";
import {Filters} from "@/ui/filters/filters-container"

export default function Sidemenufilters({ className }: { className?: string }) {
  const [filtersApplied, setFiltersApplied] = useState(false);
  const handleApplyFilter = () => {
    setFiltersApplied(true);
  };
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
          active: minPrice != -1 && maxPrice != 1000000000000,
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
          active: newTypes.length != 0 && newTypes != null,
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
      router.push(`/home?${searchParams.toString()}`);
    };
    const resetFilter = (resetFilter?: string) => {
      const searchParams = new URLSearchParams(params.toString());
      if (!resetFilter) {
        searchParams.delete("minPrice");
        searchParams.delete("maxPrice");
        searchParams.delete("types");
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
  return (
    <div className={"flex flex-col space-y-4 p-4 " + className}>
      <h2 className="text-white text-lg font-medium">Filters</h2>
      <SortsContainer mode="sidemenu" />
      <PriceFilterDropdown
                handleResetFilter={resetFilter}
                handleApplyFilter={applyFilter}
                handleSetFilter={handleSetPriceFilter}
                price={[filters.price.min, filters.price.max]}
                mode="sidemenu"
              />
      <TypeFilterDropdown
                handleResetFilter={resetFilter}
                handleApplyFilter={applyFilter}
                handleSetFilter={handleSetTypesFilter}
                selectedTypes={filters.types.values}
                mode="sidemenu"
              />
      <div className="flex gap-2 justify-between">
        <button
          className="bg-primary w-full text-white text-sm px-4 py-1 rounded-lg cursor-pointer"
          onClick={applyFilter}
        >
          Apply
        </button>
        <button
          className="text-white w-full border border-white text-sm px-4 py-1 rounded-lg cursor-pointer"
          onClick={()=>resetFilter()}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
