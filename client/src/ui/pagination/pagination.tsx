"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function Pagination({ pages }: { pages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let params = new URLSearchParams(searchParams.toString());
  const [currentPage, setCurrentPage] = useState(params.get("page") || "1");
  const handleSetPage = (page: string) => {
    if (Number(page) > pages || Number(page) < 1) return;
    params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`/home?${params.toString()}`);
    setCurrentPage(page);
  };
  return (
    <div className="flex justify-center space-x-2 items-center p-4">
      <div
        className="text-white text-sm p-3 cursor-pointer hover:bg-white/10 rounded-lg"
        onClick={() => handleSetPage((Number(currentPage) - 1).toString())}
      >
        <ArrowLeft size={20} />
      </div>
      {Array.from({ length: pages }, (_, i) => (
        <div
          key={i}
          className={`text-white text-sm p-3 cursor-pointer hover:bg-white/10 rounded-lg ${
            currentPage == (i + 1).toString() ? "bg-white/10" : ""
          }`}
          onClick={() => handleSetPage((i + 1).toString())}
        >
          {i + 1}
        </div>
      ))}
      <div
        className="text-white text-sm p-3 cursor-pointer hover:bg-white/10 rounded-lg"
        onClick={() => handleSetPage((Number(currentPage) + 1).toString())}
      >
        <ArrowRight size={20} />
      </div>
    </div>
  );
}
