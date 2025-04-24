"use client"
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
  const searchParams = useSearchParams()
  const currentSearch = searchParams.get("search")
    const [searchString, setSearchString] = useState(currentSearch || "")
    const router = useRouter()

    const handleSearch = (e: any) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString())
        params.set("search", searchString)
        router.push(`/home?${params.toString()}`)
    }
    return (
    <div className="flex justify-center space-x-2 items-center p-4 bg-black">
      <form onSubmit={handleSearch}>
        <input
          placeholder="search for a property, location, compound"
          className="w-100 border bg-white border-black rounded-lg py-2 px-4 text-black"
          type="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
         />
      </form>
    </div>
  );
}
