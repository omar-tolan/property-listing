"use client"
import { X } from "lucide-react";
import Sidemenufilters from "./side-menu-filters";

export default function SideMenu({handleOpenMenu}: {handleOpenMenu: () => void}) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="flex fixed bg-black top-0 right-0 w-[70dvw] h-screen z-10" onClick={handleClick}>
            <X size={30} color="white" className="cursor-pointer ml-4 mt-4" onClick={handleOpenMenu} />
            <Sidemenufilters className="mt-10"/>
        </div>
    )
}
