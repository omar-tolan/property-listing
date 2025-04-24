"use client";
import { FunnelPlus, FunnelX, X } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const types = [
  "Apartment",
  "House",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Chalet",
];

export default function TypeFilterBadge({
  handleOpenMenu,
  appliedFilter,
}: {
  handleOpenMenu: (key: string) => void;
  appliedFilter: string;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const color =
    appliedFilter === "type"
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
          handleOpenMenu("type");
        }}
      >
        <div className="text-black text-md">Property Type</div>
        {appliedFilter === "type" ? (
          <FunnelX size={15} color="#000000" />
        ) : (
          <FunnelPlus size={15} color="#000000" />
        )}
      </div>
    </div>
  );
}

export function TypeFilterDropdown({
  handleOpenMenu,
  handleApplyFilter,
}: {
  handleOpenMenu: (key: string) => void;
  handleApplyFilter: (key: string) => void;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [filter, setFilter] = useState<string[]>([]);
  
  const handleChange = (type: string) => {
    setFilter(prev => {
      if (prev.includes(type)) {
        return prev.filter(item => item !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const applyFilter = () => {
    const searchParams = new URLSearchParams(params.toString());
    searchParams.delete("type"); // Clear existing types first
    if (filter.length > 0) {
      searchParams.set("type", filter.join(","));
    }
    router.push(`/home?${searchParams.toString()}`);
    handleApplyFilter("type");
  };

  const resetFilter = () => {
    setFilter([]);
    const searchParams = new URLSearchParams(params.toString());
    searchParams.delete("type");
    router.push(`/home?${searchParams.toString()}`);
    handleApplyFilter("");
  };

  const checkInFilter = (type: string) => {
    return filter.includes(type);
  };

  return (
    <div className="bg-white w-[300px] z-50 mt-1 py-4 px-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex justify-between">
          <label className="text-black text-sm font-medium">
            Select property types
          </label>
          <div className="cursor-pointer">
            <X size={15} color="#000000" onClick={() => handleOpenMenu("")} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {types.map((type) => (
          <div
            key={type}
            className="flex items-center space-x-2 mb-2 mr-2 cursor-pointer"
            onClick={() => handleChange(type)}
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-primary bg-gray-100 rounded focus:ring-primary focus:ring-2"
              checked={checkInFilter(type)}
              onChange={() => handleChange(type)}
            />
            <div>{type}</div>
          </div>
        ))}
      </div>
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
