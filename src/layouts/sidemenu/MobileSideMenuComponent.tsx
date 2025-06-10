import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import SidebarFooterComponent from "./SidebarFooterComponent";
import MenuComponent from "./MenuComponent";

const MobileSideMenuComponent: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 block tablet:hidden">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 w-[250px] flex flex-col h-full">
        <SheetTitle />
        <nav className="flex-1 overflow-y-auto space-y-4 bg-white p-4 ">
          <MenuComponent />
        </nav>
        <SheetFooter className="p-1 pb-0">
          <SidebarFooterComponent />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideMenuComponent;
