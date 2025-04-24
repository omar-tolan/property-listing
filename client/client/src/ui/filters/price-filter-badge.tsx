"use client";
import { useState } from "react";
import { FunnelPlus, FunnelX, X } from "lucide-react";
import { Slider } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function PriceFilterBadge({
  handleOpenMenu,
  appliedFilter,
}: {
  handleOpenMenu: (key: string) => void;
  appliedFilter: string;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const color =
    appliedFilter === "price"
      ? "bg-primary border border-white"
      : "bg-white border border-black";
  return (
    <div className="inline-block relative">
      <div
        className={
          color +
          " flex space-x-2 px-4 py-1 items-center rounded-lg cursor-pointer"
        }
        onClick={() => {
          handleOpenMenu("price");
        }}
      >
        <div className="text-black text-md">Price</div>
        {appliedFilter === "price" ? (
          <FunnelX size={15} color="#000000" />
        ) : (
          <FunnelPlus size={15} color="#000000" />
        )}
      </div>
    </div>
  );
}

export function PriceFilterDropdown({
  handleOpenMenu,
  handleApplyFilter,
}: {
  handleOpenMenu: (key: string) => void;
  handleApplyFilter: (key: string) => void;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [filter, setFilter] = useState<number[]>([-1, 1000000000000]);
  const handleChange = (event: Event, newValue: number[]) => {
    setFilter(newValue);
  };
  const applyFilter = () => {
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set("minPrice", filter[0].toString());
    searchParams.set("maxPrice", filter[1].toString());
    router.push(`/home?${searchParams.toString()}`);
    handleApplyFilter("price");
  };
  const resetFilter = () => {
    setFilter([-1, 1000000000000]);
    const searchParams = new URLSearchParams(params.toString());
    searchParams.delete("minPrice");
    searchParams.delete("maxPrice");
    router.push(`/home?${searchParams.toString()}`);
    handleApplyFilter("");
  };
  return (
    <div className="bg-white w-[300px] z-50 mt-1 py-4 px-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex justify-between">
          <label className="text-black text-sm font-medium">Price Range</label>
          <div className="cursor-pointer">
            <X size={15} color="#000000" onClick={() => handleOpenMenu("")} />
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-1">
          {filter[0] === -1 ? "Any" : `EGP${filter[0].toLocaleString()}`} -{" "}
          {filter[1] === 1000000
            ? "EGP1M+"
            : `EGP${filter[1].toLocaleString()}`}
        </div>
      </div>
      <Slider
        min={0}
        max={10000000}
        step={500000}
        value={filter}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `EGP${value.toLocaleString()}`}
        sx={{
          color: "#FE7743",
          "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: "#FE7743",
          },
          "& .MuiSlider-track": {
            height: 4,
          },
          "& .MuiSlider-rail": {
            height: 4,
            backgroundColor: "#f0f0f0",
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#FE7743",
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
          },
        }}
      />
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-primary text-white text-sm px-4 py-1 rounded-lg cursor-pointer"
          onClick={applyFilter}
        >
          Apply
        </button>
        <button
          className="text-black border border-black text-sm px-4 py-1 rounded-lg cursor-pointer"
          onClick={resetFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
