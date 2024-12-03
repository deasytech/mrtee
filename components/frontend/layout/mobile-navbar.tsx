"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mainMenu } from "@/lib/constants";
import SearchBar from "./search-bar";

const MobileNavbar: React.FC = () => {
  const [ openMenus, setOpenMenus ] = useState<{ [ key: string ]: boolean }>({});
  const [ isSheetOpen, setIsSheetOpen ] = useState(false);

  const handleSubMenuToggle = (id: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [ id ]: !prev[ id ],
    }));
  };

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  const renderMenu = (menu: typeof mainMenu[ 0 ], level = 0) => (
    <div key={menu.id}>
      {menu.sub ? (
        <>
          <div
            onClick={() => handleSubMenuToggle(menu.id)}
            className="w-full flex justify-between items-center py-2 px-3 text-left text-[12px] uppercase transition-all"
          >
            {menu.label}
            <ChevronDown
              size={16}
              className={`transition-transform ${openMenus[ menu.id ] ? "rotate-180" : ""
                }`}
            />
          </div>
          {openMenus[ menu.id ] && (
            <div className="ml-4">
              {menu.sub.map((subItem) =>
                renderMenu({ ...subItem, id: `${menu.id}-${subItem.label}` }, level + 1)
              )}
            </div>
          )}
        </>
      ) : (
        <Link
          href={menu.url}
          onClick={handleMenuItemClick}
          className={`block py-2 px-3 text-[12px] uppercase transition-all`}
        >
          {menu.label}
        </Link>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-2 lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Menu size={32} className="cursor-pointer text-white" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-gray-200">
          <SheetHeader className="pb-4">
            <SheetTitle>
              <Link href="/">
                <Image src="/images/logo.png" alt="logo" width={130} height={59} />
              </Link>
            </SheetTitle>
            <div className="pt-4">
              <SearchBar />
            </div>
          </SheetHeader>
          <nav className="space-y-2">
            {mainMenu.map((menu) => renderMenu(menu))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
