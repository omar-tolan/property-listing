import { Home } from "lucide-react";
import { SortsContainer } from "./sorting/sorts-container";

export function Navbar() {
  return (
    <div className="flex justify-center space-x-2 items-center p-4 bg-black">
      <Home size={35} color="#FE7743" />
      <input
        placeholder="search for a property, location, compound"
        className="w-100 border bg-white border-black rounded-lg py-2 px-4 text-black"
      />
      <SortsContainer />
    </div>
  );
}
