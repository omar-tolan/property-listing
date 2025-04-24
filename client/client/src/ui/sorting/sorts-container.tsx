"use client";
import { useState } from "react";
import { ArrowUpDownIcon } from "lucide-react";
import { SortBadge } from "./sort-badge";
import { useRouter, useSearchParams } from "next/navigation";

export type SortOptions = {
  price: 0 | 1 | -1;
  location: 0 | 1 | -1;
  recent: 0 | 1 | -1;
};

export function SortsContainer() {
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    price: 0,
    location: 0,
    recent: 0,
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortSelection = (key: string) => {
    let newSortOptions: SortOptions = {
      price: 0,
      location: 0,
      recent: 0,
    };
    newSortOptions[key as keyof SortOptions] =
      sortOptions[key as keyof SortOptions] === 0
        ? 1
        : sortOptions[key as keyof SortOptions] === 1
        ? -1
        : 0;
    setSortOptions(newSortOptions);
    const params = new URLSearchParams(searchParams.toString());
    Object.keys(sortOptions).forEach((option) => {
      if(params.get(option)) params.delete(option);;
    })
    params.set(
      key,
      newSortOptions[key as keyof SortOptions] === 1 ? "asc" : "desc"
    );
    if (newSortOptions[key as keyof SortOptions] === 0) params.delete(key);
    router.push(`/home?${params.toString()}`);
  };
  return (
    <div className="flex space-x-2 items-center p-4 bg-black">
      <div className="flex flex-row items-center">
        <ArrowUpDownIcon color="white" />
        <div className="text-white text-md font-extralight px-2 py-3 border-r-1 border-gray-500">
          Sort By
        </div>
      </div>
      <div className="flex space-x-2">
        {Object.keys(sortOptions).map((key) => {
          return (
            <div key={key} onClick={() => handleSortSelection(key)}>
              <SortBadge
                sort={{
                  name: key,
                  currentDir: sortOptions[key as keyof SortOptions],
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
