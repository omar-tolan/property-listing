"use client";
import { redirect } from "next/navigation";
export default function NavigationProvider({
  children,
  listingId,
}: {
  children: React.ReactNode;
  listingId: string;
}) {
  const navigateToListingPage = () => {
    redirect(`${listingId}`)
};
  return <div onClick={navigateToListingPage}>{children}</div>;
}
