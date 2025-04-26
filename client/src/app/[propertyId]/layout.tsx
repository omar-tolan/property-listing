import ListingNavbar from "@/ui/navigation/listing-navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ListingNavbar />
      {children}
    </>
  );
}
