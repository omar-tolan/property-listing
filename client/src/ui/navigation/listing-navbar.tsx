"use client";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function ListingNavbar() {
  const router = useRouter();
  const returnToPreviousPage = () => {
    router.back();
  };
  return (
    <div className="flex justify-start space-x-2 items-center p-4">
      <div
        className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-white"
        onClick={returnToPreviousPage}
      >
        <ArrowLeft color="#FE7743" size={35} />
      </div>
    </div>
  );
}
