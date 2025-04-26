import { Home } from "lucide-react";
import { SortsContainer } from "./sorting/sorts-container";
import { SearchBar } from "./search/search-bar";
import FiltersContainer from "./filters/filters-container";
import SideMenuTrigger from "./sidemenu/side-menu-trigger";

export function Navbar() {
  return (
    <div className="flex justify-center space-x-2 items-center p-4 bg-black">
      <Home size={35} color="#FE7743" />
      <SearchBar className="" />
      <SideMenuTrigger className="lg:hidden" />
      <SortsContainer className="hidden lg:flex" />
      <FiltersContainer className="hidden lg:flex" />
    </div>
  );
}
