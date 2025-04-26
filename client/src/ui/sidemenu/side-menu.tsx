"use client"
import { X } from "lucide-react";
import Sidemenufilters from "./side-menu-filters";

export default function SideMenu({handleOpenMenu}: {handleOpenMenu: () => void}) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed bg-black top-0 right-0 w-[70dvw] h-screen z-10" onClick={handleClick}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4">
                    <X 
                        size={30} 
                        color="white" 
                        className="cursor-pointer hover:text-primary transition-colors" 
                        onClick={handleOpenMenu}
                    />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Sidemenufilters className="px-4"/>
                </div>
            </div>
        </div>
    )
}
