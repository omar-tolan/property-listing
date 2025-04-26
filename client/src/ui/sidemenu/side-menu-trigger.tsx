"use client";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import SideMenu from "./side-menu";
export default function SideMenuTrigger({ className }: { className?: string }) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
    <div>
      <div className={"" + className} onClick={handleOpenMenu}>
        <SlidersHorizontal size={30} color="white" className="cursor-pointer"/>
        {openMenu && <SideMenu handleOpenMenu={handleOpenMenu} />}
      </div>
    </div>
  );
}
