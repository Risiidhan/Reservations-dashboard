import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { renderMenu, sidebarContent } from './content';
import SidebarFooterComponent from './SidebarFooterComponent';


const MobileSidemenuComponent: React.FC = () => {
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
    {sidebarContent.map((item: SidebarSection, index: number) => (
      <div key={index} className="border-b border-[#A6B4DA] pb-4">
        <p className="text-[15.25px] pl-4 font-bold text-[#53637C] mb-4 uppercase">
          {item.title}
        </p>
        {renderMenu(item.menu)}
      </div>
    ))}
  </nav>

  <SheetFooter className="p-1 pb-0">
    <SidebarFooterComponent />
  </SheetFooter>
</SheetContent>
    </Sheet>
  );
};

export default MobileSidemenuComponent;
