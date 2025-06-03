import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { renderMenu, sidebarContent } from './content';
import RightPanelComponent from '../header/right-panel/RightPanelComponent';


const MobileSidemenuComponent: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 block tablet:hidden">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[250px]">
         <SheetTitle></SheetTitle> 
        <nav className="space-y-4 bg-white h-full p-4 border-r border-[#A6B4DA]">
          {sidebarContent.map((item: SidebarSection, index: number) => (
            <div key={index} className="border-b border-[#A6B4DA] pb-4">
              <p className="text-[15.25px] pl-4 font-bold text-[#53637C] mb-4 uppercase">
                {item.title}
              </p>
              {renderMenu(item.menu)}
            </div>
          ))}
        </nav>
      <SheetFooter>
        <RightPanelComponent />
      </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidemenuComponent