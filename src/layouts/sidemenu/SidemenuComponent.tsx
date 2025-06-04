  'use client';

  import React from 'react';
  import { Sidebar, SidebarContent, SidebarFooter, useSidebar } from '@/components/ui/sidebar';
  import "./styles.css"
  import { renderMenu, sidebarContent } from './content';
import SidebarFooterComponent from './SidebarFooterComponent';

  export const SidemenuComponent: React.FC = () => {
   const { open } = useSidebar();

  return (
    
   <div className={`relative transition-all duration-300 ${open ? "tablet:sidebar-width" : "w-0"}`}>
      <Sidebar className={`bg-white sidebar-position sidebar-width border-r border-[#A6B4DA]`}>
        <SidebarContent className='p-4'>

        <nav className="space-y-4 bg-white overflow-y-auto">
          {sidebarContent.map((item, index) => (
            <div key={index} className="border-b border-[#A6B4DA] pb-4">
              <p className="text-[15.25px] pl-[16px] font-bold text-[#53637C] mb-4 uppercase">
                {item.title}
              </p>
              {renderMenu(item.menu)}
            </div>
          ))}
        </nav>
          </SidebarContent>

        <SidebarFooter className="p-2 pb-0">
         <SidebarFooterComponent />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
  };

