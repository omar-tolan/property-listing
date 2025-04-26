"use client";
import { ArrowLeft } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
export default function ListingNavbar() {
  const returnToPreviousPage = () => {
    redirect("/home");
  };
  return (
    <div className="flex justify-start space-x-2 items-center p-4">
      <div
        className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-white"
        onClick={returnToPreviousPage}
      >
        <ArrowLeft color="#FE7743" size={35} />
      </div>
      <div className=" text-white text-3xl font-extralight w-full">
        Home
      </div>
    </div>
  );
}
