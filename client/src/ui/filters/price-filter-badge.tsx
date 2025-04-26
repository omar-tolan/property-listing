"use client";
import { useEffect, useState } from "react";
import { FunnelPlus, FunnelX, X } from "lucide-react";
import { Slider } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function PriceFilterBadge({
  handleOpenMenu,
  appliedFilter,
}: {
  handleOpenMenu: (key: string) => void;
  appliedFilter: boolean;
}) {
  const color =
    appliedFilter
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
        {appliedFilter ? (
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
  handleResetFilter,
  handleSetFilter,
  price,
  mode,
}: {
  handleOpenMenu?: (key: string) => void;
  handleApplyFilter: () => void;
  handleResetFilter: (resetFilter: string) => void;
  handleSetFilter: (prices: number[]) => void;
  price: number[];
  mode?: "sidemenu" | "navbar";
}) {
  const handleChange = (e: Event, newValue: number[]) => {
    handleSetFilter(newValue);
  };
  
  return (
    <div
      className={
        mode == "sidemenu"
          ? "bg-black w-[300px] z-50 mt-1 py-4 px-4"
          : "bg-white w-[300px] z-50 mt-1 py-4 px-6 rounded-lg shadow-lg"
      }
    >
      <div className="mb-4">
        <div className="flex justify-between">
          <label
            className={
              mode == "sidemenu"
                ? "text-white text-sm font-medium"
                : "text-black text-sm font-medium"
            }
          >
            Price Range
          </label>
          {mode == "navbar" && (
            <div className="cursor-pointer">
              <X
                size={15}
                color="#000000"
                onClick={() => handleOpenMenu && handleOpenMenu("")}
              />
            </div>
          )}
        </div>
        <div
          className={
            mode == "sidemenu"
              ? "text-gray-200 text-xs mt-1"
              : "text-gray-500 text-xs mt-1"
          }
        >
          {price[0] === -1 ? "Any" : `EGP${price[0].toLocaleString()}`} -{" "}
          {price[1] === 1000000
            ? "EGP1M+"
            : `EGP${price[1].toLocaleString()}`}
        </div>
      </div>
      <Slider
        min={0}
        max={10000000}
        step={500000}
        value={price}
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
      {mode == "navbar" && (
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="bg-primary text-white text-sm px-4 py-1 rounded-lg cursor-pointer"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
          <button
            className={
              "text-black border border-black text-sm px-4 py-1 rounded-lg cursor-pointer"
            }
            onClick={() => handleResetFilter("price")}
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}
